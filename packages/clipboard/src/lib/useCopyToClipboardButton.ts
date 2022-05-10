import { useState, TouchEvent, MouseEvent } from 'react';
import { useCopyToClipboard } from './useCopyToClipboard';

type Options = {
  text: string;
  timeout?: number;
};

export function useCopyToClipboardButton({ text, timeout = 2000 }: Options) {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [copy] = useCopyToClipboard();

  const handleCopy = async () => {
    const copied = await copy(text);
    if (copied) {
      setIsCopied(true);
      setCopiedText(text);

      if (timeout) {
        setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      }
    }
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    handleCopy();
  };

  const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
    handleCopy();
  };

  return [
    {
      onClick: handleClick,
      onTouchStart: handleTouchStart,
    },
    {
      isCopied,
      copiedText,
    },
  ];
}
