import styled from 'styled-components';

const Header = styled.h4`
  color: ${(p) => p.color || p.theme.colors.textPrimary};
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.6em;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export default Header;
