/* eslint-disable jsx-a11y/anchor-is-valid */

import { ReactNode, useMemo } from 'react';
import { useCurrentUrl } from '../utils/useCurrentUrl';

type Props = {
  children?: ReactNode;
  title?: string;
  text?: string;
  url?: string;
};

export const ShareLink = ({
  children,
  title = 'ihasabuvket.it',
  text = 'Setup frontend or file hosting in 3 minutes',
  url,
}: Props) => {
  const currentUrl = useCurrentUrl(true);
  const supportsNavigatorShare = useMemo(() => navigator && navigator.share, [
    navigator,
  ]);
  if (supportsNavigatorShare) {
    return (
      <a
        href="#"
        role="button"
        onClick={() =>
          navigator.share({ title, text, url: url || currentUrl })
        }>
        {children || 'Share this page'}
      </a>
    );
  }
  return <a href={url || currentUrl}>{children || 'Share this page'}</a>;
};
