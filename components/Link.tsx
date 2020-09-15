import { CSSProperties, ReactNode } from 'react';
import NextLink from 'next/link';

const Link = ({
  children,
  href,
  styles,
}: {
  children: ReactNode;
  href: string;
  styles?: CSSProperties;
}) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a style={styles}>{children}</a>
  </NextLink>
);

export default Link;
