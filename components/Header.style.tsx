import styled from 'styled-components';

const Header = styled.h4`
  color: ${(p) => p.color || p.theme.colors.textPrimary};
  font-size: 2rem;
  margin-bottom: 0.6em;
  margin-top: 0;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export default Header;
