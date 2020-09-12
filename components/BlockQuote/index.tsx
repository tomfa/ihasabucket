import { ReactNode } from 'react';
import styled from 'styled-components';

import Quote from './Quote';
import Source from './Source';

type Props = {
  children: ReactNode;
  author?: string;
  source?: string;
};

const BlockQuote = ({ children, author, source }: Props) => (
  <Block>
    <Quote>{children}</Quote>
    {(author || source) && (
      <Source>
        {author ? (
          <>
            &mdash;
            {author}
          </>
        ) : ''}
        {author && source && <br />}
        {source && <em>{source}</em>}
      </Source>
    )}
  </Block>
);

const Block = styled.blockquote`
  font-family: 'Barlow Condensed', sans-serif;
  max-width: 620px;
  margin-left: 0;
  margin-right: 0;
  align-self: center;
`;

export default BlockQuote;
