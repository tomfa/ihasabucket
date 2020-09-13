import styled from 'styled-components';

const TitleStyle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;

  a {
    color: ${(p) => p.theme.colors.links};
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;
export default TitleStyle;
