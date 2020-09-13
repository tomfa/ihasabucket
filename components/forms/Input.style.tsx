import styled from 'styled-components';
import Label from './Label.style';

const Input = styled.input`
  &[type='checkbox'] {
    width: 1px;
    height: 1px;
    outline: none;
    border: none;
    opacity: 0;
  }
  &[type='radio'] {
    width: 1px;
    height: 1px;
    outline: none;
    border: none;
    opacity: 0;
  }

  &:focus + ${Label} {
    border: 2px solid ${(p) => p.theme.colors.primary};
  }
`;

export default Input;
