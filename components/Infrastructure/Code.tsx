/* eslint-disable react/no-array-index-key */

import { useCallback, useMemo, useState } from 'react';
import Mute from './Mute.style';
import Pre from './Pre.style';
import PreButton from './PreButton.style';

type Props = { mainTfContent: string[]; bucketName: string };

const copyToClipBoard = (texts: string[]) => {
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

const Code = ({ mainTfContent, bucketName }: Props) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const lines = useMemo(
    () => [
      '# Create a folder to store infrastructure code',
      'mkdir infrastructure',
      'cd infrastructure',
      '',
      '# Create config file',
      `cat <<EOT >> ${bucketName || 'main'}.tf`,
      ...mainTfContent,
      'EOT',
      '',
      '# Deploy',
      'terraform init',
      'terraform apply',
    ],
    [mainTfContent, bucketName]
  );
  const copy = useCallback(() => {
    copyToClipBoard(lines);
    setHasCopied(true);
  }, [lines]);
  return (
    <Pre>
      {lines.map((line, i) => {
        if (line.trim().startsWith('#')) {
          return (
            <Mute key={i}>
              {line}
              {'\n'}
            </Mute>
          );
        }
        return (
          <span key={i}>
            {line}
            {'\n'}
          </span>
        );
      })}
      <PreButton onClick={copy}>
        {(hasCopied && 'Copied!') || 'Copy to clipboard'}
      </PreButton>
    </Pre>
  );
};

export default Code;
