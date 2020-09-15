import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;

  @media (min-width: 375px) {
    font-size: 2.5rem;
  }

  @media (min-width: 550px) {
    font-size: 4rem;
  }

  & > a {
    color: ${(p) => p.theme.colors.textSecondary};
    text-decoration: none;
  }
`;
export default Title;
