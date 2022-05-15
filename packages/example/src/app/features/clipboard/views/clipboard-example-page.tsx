import {
  useCopyToClipboard,
  useCopyToClipboardButton,
} from '@fairytek/react-clipboard';
import { useState } from 'react';

export function ClipboardExamplePage() {
  const [copy, isCopied, copiedText] = useCopyToClipboard();
  const [copyButtonProps, isValueCopied, copiedValue] =
    useCopyToClipboardButton('Hello world');

  const [textValue, setTextValue] = useState(
    'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.'
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
    }
    h1,
    h2,
    p,
    pre {
      margin: 0;
    }
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }
    .shadow {
      box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .rounded {
      border-radius: 1.5rem;
    }
    h1,
    h2 {
      font-size: inherit;
      font-weight: inherit;
    }
    .wrapper {
      width: 100%;
    }
    .container {
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      padding-bottom: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: rgba(55, 65, 81, 1);
      width: 100%;
    }
    #welcome {
      margin-top: 2.5rem;
    }
    #welcome h1 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
    }

    #middle-content {
      align-items: flex-start;
      display: grid;
      gap: 4rem;
      grid-template-columns: 1fr;
      margin-top: 3.5rem;
    }
    #middle-content h2 {
      font-weight: 500;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
      line-height: 1.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .example {
      padding: 2.5rem 2rem;
    }
    `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Clipboard Example </h1>
          </div>

          <div id="middle-content">
            <div className="example rounded shadow">
              <h2>useCopyToClipboard hook</h2>

              <div>
                <textarea
                  value={textValue}
                  onChange={(event) => setTextValue(event.target.value)}
                />

                <button type="button" onClick={() => copy(textValue)}>
                  {isCopied ? 'Copied' : 'Copy text'}
                </button>

                <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
              </div>
            </div>

            <div className="example rounded shadow">
              <h2>useCopyToClipboard hook</h2>

              <div>
                <textarea
                  value={textValue}
                  onChange={(event) => setTextValue(event.target.value)}
                />

                <button {...copyButtonProps}>
                  {isCopied ? 'Copied' : 'Copy text'}
                </button>

                <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
