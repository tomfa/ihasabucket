import styled from 'styled-components';

const Pre = styled.pre<{ $noMarginTop?: boolean }>`
  position: relative;
  background-color: #3a3a3a;
  color: white;
  padding: 1rem;
  margin-top: ${(p) => (p.$noMarginTop ? '0' : '1.7rem')};
  margin-bottom: 1.7rem;
  overflow: auto;
  min-height: 4rem;
`;

export default Pre;
