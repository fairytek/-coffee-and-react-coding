import React from 'react';
import styles from './clipboard.module.scss';

import { useCopyToClipboardButton } from '../hooks/use-copy-to-clipboard-button';

export type CopyButtonProps = {
  children: React.ReactElement;
  onCopy: () => void;
};

export function CopyButton({ onCopy, children, ...rest }: CopyButtonProps) {
  const [buttonProps] = useCopyToClipboardButton('Hello');

  const element = React.Children.only(children);

  return React.cloneElement(element, { ...rest, ...buttonProps });
}
