import React from 'react';
import styles from './clipboard.module.scss';

export type CopyToClipboardProps = {
  children: React.ReactElement;
  onCopy: () => void;
}

export function CopyToClipboard({
  onCopy,
  children,
  ...rest
}: CopyToClipboardProps) {

  const element = React.Children.only(children);

  const handleClick = (event: MouseEvent) => {
    console.log(event)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(element, event)

  }

  return React.cloneElement(element, { ...rest, onClick: handleClick, onKeyPress: handleKeyPress });
}

