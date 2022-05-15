# React copy to clipboard

Lightweight library copy to clipboard for the React.

## Install

You can install `@fairytek/react-clipboard` with NPM or Yarn.

```bash
npm install @fairytek/react-clipboard
```

```bash
yarn add @fairytek/react-clipboard
```

## Usage

`useCopyToClipboard` hook

```jsx
import React from 'react';

import { useCopyToClipboard } from '@fairytek/react-clipboard';

export default function Component() {
  const [copy, isCopied, copiedText] = useCopyToClipboard();

  return (
    <>
      <h1>Click to copy:</h1>
      <div>
        <button type="button" onClick={() => copy('Hello world')}>
          {isCopied ? 'Copied' : 'Copy text'}
        </button>
      </div>
      <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
    </>
  );
}
```

`useCopyToClipboardButton` hook

```jsx
import React from 'react';

import { useCopyToClipboardButton } from '@fairytek/react-clipboard';

export default function Component() {
  const [buttonProps, { isCopied, copiedText }] =
    useCopyToClipboardButton('Hello');

  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button {...buttonProps}>{isCopied ? 'Copied' : 'Copy'}</button>
      </div>
      <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
    </>
  );
}
```
