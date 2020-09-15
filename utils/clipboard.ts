export const copyToClipBoard = (texts: string[]) => {
  const textField = window.document.createElement('textarea');
  textField.setAttribute(
    'style',
    'position: absolute; bottom: 0; top: 0; width: 1; height: 1; opacity: 0.01;'
  );
  texts.forEach((text) => {
    textField.append(text);
    textField.append('\n');
  });
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  document.body.removeChild(textField);
};
