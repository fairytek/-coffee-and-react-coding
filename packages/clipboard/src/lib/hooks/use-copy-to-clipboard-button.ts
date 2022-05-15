import { CopiedValue, IsCopied, Options } from './types';
import { useCopyToClipboard } from './use-copy-to-clipboard';

type CopyButtonProps = {
  role: string;
  onClick: () => void;
  onTouchStart: () => void;
};

type ReturnType = [CopyButtonProps, IsCopied, CopiedValue];

export function useCopyToClipboardButton(
  text: string,
  options?: Options
): ReturnType {
  const [copy, isCopied, copiedValue] = useCopyToClipboard(options);
  const props: CopyButtonProps = {
    role: 'button',
    onClick: () => copy(text),
    onTouchStart: () => copy(text),
  };

  return [props, isCopied, copiedValue];
}
