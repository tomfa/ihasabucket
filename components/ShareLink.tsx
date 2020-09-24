/* eslint-disable jsx-a11y/anchor-is-valid */

import { ReactNode, useMemo } from 'react';
import { useCurrentUrl } from '../utils/useCurrentUrl';
import ButtonStyle from './Button.styles';
import ShareIcon from './icons/Share';

type Props = {
  children?: ReactNode;
  text?: string;
  url?: string;
};

export const ShareLink = ({
  children,
  text = 'ihasabucket.it', // TODO: Get from config
  url,
}: Props) => {
  const currentUrl = useCurrentUrl(true);
  const supportsNavigatorShare = useMemo(() => navigator && navigator.share, [
    navigator.share,
  ]);
  if (supportsNavigatorShare) {
    return (
      <ButtonStyle
        thin
        onClick={() => navigator.share({ text, url: url || currentUrl })}>
        {children || 'Share this page'}
        <ShareIcon color={'white'} />
      </ButtonStyle>
    );
  }
  return <a href={url || currentUrl}>{children || 'Share this page'}</a>;
};
