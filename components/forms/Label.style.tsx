import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  cursor: pointer;
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
  padding-left: 3rem;
  margin-bottom: 3px;
  background-color: ${(p) => (p.checked ? p.theme.colors.primary : '')};
  color: ${(p) => (p.checked ? p.theme.colors.textSecondary : p.theme.colors.textPrimary)};
  border: 2px solid transparent;

  &:before {
    content: '';
    display: block;
    width: ${(p) => (p.checked ? '10px' : '20px')};
    height: 20px;
    border: 1px solid ${(p) => (p.checked ? 'white' : 'black')};
    position: absolute;
    left: ${(p) => (p.checked ? '20px' : '15px')};
    top: ${(p) => (p.checked ? '5px' : '10px')};
    opacity: ${(p) => (p.checked ? 1 : 0.6)};
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
    border-top-color: ${(p) => p.checked && 'transparent'};
    border-left-color: ${(p) => p.checked && 'transparent'};
    transform: ${(p) => p.checked && 'rotate(45deg)'};
  }
`;

export default Label;
