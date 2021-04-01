/* eslint-disable react/no-array-index-key */

import { useCallback, useEffect, useState } from 'react';
import { copyToClipBoard } from '../../utils/clipboard';
import Mute from '../Mute.style';
import { Colored } from '../utils';
import { useTheme } from '../../styles/theme';
import Description from '../forms/Description.style';
import Pre from './Pre.style';
import PreButton from './PreButton.style';

type Props = {
  lines: string[];
  bucketName?: string;
  intro?: string;
  footer?: string;
};

const Code = ({ lines, bucketName, intro, footer }: Props) => {
  const theme = useTheme();
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const copy = useCallback(() => {
    copyToClipBoard(lines);
    setHasCopied(true);
  }, [lines]);

  useEffect(() => setHasCopied(false), [lines, bucketName]);

  return (
    <>
      {!!intro && <p>{intro}</p>}
      <div style={{ position: 'relative' }}>
        <PreButton onClick={copy}>
          {(hasCopied && (
            <span>
              Copied! <Colored color={theme.colors.success}>✓</Colored>
            </span>
          )) ||
            'Copy to clipboard'}
        </PreButton>
        <Pre $noMarginTop={!!intro}>
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
        </Pre>
      </div>
      {!!footer && <Description>{footer}</Description>}
    </>
  );
};

export default Code;
