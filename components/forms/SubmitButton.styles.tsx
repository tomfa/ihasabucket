import styled from 'styled-components';

const SubmitButton = styled.button`
  color: ${(p) => p.theme.colors.textSecondary};
  background-color: ${(p) =>
    p.complete ? p.theme.colors.primary : p.theme.colors.secondary};
  border: none;
  flex: 0.5;
  position: relative;

  outline-style: dashed;
  outline-width: 2px;
  cursor: pointer;

  &:focus,
  &:active {
    outline-color: ${(p) => p.theme.colors.primary};
  }

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 20px;
    border: 3px solid white;
    position: absolute;
    left: calc(50% - 10px);
    top: 12px;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
`;

export default SubmitButton;
