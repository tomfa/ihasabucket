import styled from 'styled-components';

const ButtonStyle = styled.button`
  color: ${(p) => p.theme.colors.textSecondary};
  background-color: ${(p) => p.theme.colors.primary};
  border: none;
  padding: ${(p) => !p.link && '1rem'};
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  outline-style: dashed;
  outline-width: 2px;
  cursor: pointer;

  &:focus,
  &:active {
    outline-color: ${(p) => p.theme.colors.primary};
  }

  & > a {
    color: ${(p) => p.theme.colors.textSecondary};
    padding: 1rem;
    display: block;
  }
`;

export default ButtonStyle;
