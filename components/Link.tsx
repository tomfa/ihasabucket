import { ReactNode } from 'react';
import NextLink from 'next/link';

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>{children}</a>
  </NextLink>
);

export default Link;
