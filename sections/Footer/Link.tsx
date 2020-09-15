import styled from 'styled-components';
import { ReactNode } from 'react';

const ListItem = styled.li``;

const ListItemLink = styled.a`
  color: white;

  &:focus {
    outline: none;
    color: black;
  }
`;

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <ListItem>
    <ListItemLink href={href}>{children}</ListItemLink>
  </ListItem>
);

export default Link;
