import { ReactNode } from 'react';
import styled from 'styled-components';

import Quote from './Quote.style';
import Source from './Source.style';

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
        {author && (
          <>
            &mdash;&nbsp;
            {author}
          </>
        )}
        {author && source && <br />}
        {source && <em>{source}</em>}
      </Source>
    )}
  </Block>
);

const Block = styled.blockquote`
  font-family: ${(p) => p.theme.fonts.secondary}
  max-width: 620px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 0;
  align-self: center;
  
  @media (min-width: 700px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default BlockQuote;
