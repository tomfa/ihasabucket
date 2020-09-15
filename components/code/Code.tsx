/* eslint-disable react/no-array-index-key */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { copyToClipBoard } from '../../utils/clipboard';
import Mute from '../Mute.style';
import Pre from './Pre.style';
import PreButton from './PreButton.style';

type Props = { mainTfContent: string[]; bucketName: string };

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

  useEffect(() => setHasCopied(false), [mainTfContent, bucketName]);

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
