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

  &[type='text'] {
    padding: 1rem;
    flex: 1;
    border: none;
    font-size: 1.2rem;
    &:focus {
      margin-right: 4px;
      outline: 2px dashed ${(p) => p.theme.colors.primary};
    }
  }

  &:focus + ${Label} {
    outline: 2px dashed ${(p) => p.theme.colors.primary};
  }
`;

export default Input;
