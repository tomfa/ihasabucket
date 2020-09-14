import styled from 'styled-components';

const PreButton = styled.button`
  background-color: ${(p) => p.theme.colors.bgPrimary};
  color: ${(p) => p.theme.colors.textPrimary};
  position: absolute;
  font-family: monospace;
  top: 20px;
  right: 20px;
  border: none;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  outline-color: ${(p) => p.theme.colors.secondary};
`;

export default PreButton;
