function execCommand(commandId: string) {
  try {
    return document.execCommand(commandId);
  } catch (err) {
    return false;
  }
}

 function createFakeElement(value: string): HTMLTextAreaElement {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  const fakeElement = document.createElement('textarea');
  fakeElement.style.fontSize = '12pt';
  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0';
  // Move element out of screen horizontally
  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px';
  // Move element to the same position vertically
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = `${yPosition}px`;

  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;

  return fakeElement;
}

export function copyText(value: string) {
  const fakeElement = createFakeElement(value);
  document.body.appendChild(fakeElement);
  fakeElement.select();
  fakeElement.setSelectionRange(0, fakeElement.value.length);
  execCommand('copy');
  const selectedText = fakeElement.value;
  fakeElement.remove();

  return selectedText;
};

