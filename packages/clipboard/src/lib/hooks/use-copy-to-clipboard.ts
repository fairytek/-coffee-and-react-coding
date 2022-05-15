import { useEffect, useState } from 'react';
import { copyText } from '../helpers';
import {
  CopiedValue,
  CopyFn,
  defaultOptions,
  IsCopied,
  Options,
} from './types';

type ReturnType = [CopyFn, IsCopied, CopiedValue];

export function useCopyToClipboard(options?: Options): ReturnType {
  const [isCopied, setIsCopied] = useState<IsCopied>(false);
  const [copiedValue, setCopiedValue] = useState<CopiedValue>(null);
  const { duration = 2000 } = options || defaultOptions;

  const copy: CopyFn = (text: string) => {
    try {
      copyText(text);
      setIsCopied(true);
      setCopiedValue(text);
      return true;
    } catch (error) {
      setCopiedValue(null);
      return false;
    }
  };

  useEffect(() => {
    if (isCopied && duration) {
      setTimeout(() => {
        setIsCopied(false);
      }, duration);
    }
  }, [isCopied, duration]);

  return [copy, isCopied, copiedValue];
}
