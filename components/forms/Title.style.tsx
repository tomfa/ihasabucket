import styled from 'styled-components';

const TitleStyle = styled.h4`
  color: ${(p) => p.theme.colors.textPrimary};
  font-size: 2rem;
  margin-bottom: 0.6em;
  margin-top: 0.6em;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export default TitleStyle;
