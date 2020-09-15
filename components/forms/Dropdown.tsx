import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Option } from '../../types';
import Header from '../Header.style';
import Description from './Description.style';
import Question from './Question.style';
import InputContainer from './InputContainer.styles';
import SubmitButton from './SubmitButton.styles';

interface Props {
  id: string;
  options: Option[];
  selectedOption: Option | null;
  onChange: (selected: Option | null) => void;
  title: string;
  description?: string;
  disabled?: boolean;
}

const Select = styled.select`
  font-size: 1.2rem;
  padding: 1rem;
  flex: 1;
  border: none;
  appearance: none;
  background-color: white;

  &:focus,
  &:active {
    outline-style: dashed;
    outline-width: 2px;
    outline-color: ${(p) => p.theme.colors.primary};
    margin-right: 3px;
  }
`;
const Choice = styled.option`
  color: ${(p) => p.theme.colors.textPrimary};
`;

const DropDown = ({
  id,
  options,
  selectedOption,
  onChange,
  title,
  description,
  disabled = false,
}: Props) => {
  const onOptionChange = useCallback(
    (value: string) => {
      if (disabled) {
        return;
      }
      const checkedOption = options.find((o) => o.value === value);
      checkedOption && onChange(checkedOption);
    },
    [disabled, options, onChange]
  );
  return (
    <Question>
      {title && <Header>{title}</Header>}
      <InputContainer>
        <Select
          value={selectedOption?.value}
          onChange={(e) => onOptionChange(e.target.value)}>
          {options.map((o) => (
            <Choice key={`${id}-${o.value}`} value={o.value} label={o.label}>
              {o.label}
            </Choice>
          ))}
        </Select>
        <SubmitButton
          type="submit"
          complete={!!selectedOption}
          onClick={() => onOptionChange(selectedOption.value)}
        />
      </InputContainer>

      {description && <Description>{description}</Description>}
    </Question>
  );
};

export default DropDown;
