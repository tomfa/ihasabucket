import { useCallback } from 'react';

import { Option } from './types';
import Checkbox from './Checkbox';
import Title from './Title.style';
import Description from './Description.style';
import Choices from './Choices.style';
import Question from './Question.style';

interface Props {
  options: Option[];
  selectedOptions: Option[];
  onChange: (selected: Option[]) => void;
  title: string;
  description?: string;
  disabled?: boolean;
}

const CheckboxGroup = ({
  options,
  selectedOptions,
  onChange,
  title,
  description,
  disabled = false,
}: Props) => {
  const onOptionChange = useCallback(
    (value, checked) => {
      if (disabled) {
        return;
      }
      const selectedExceptThisOption = selectedOptions.filter(
        (o) => o.value !== value,
      );
      if (!checked) {
        return onChange(selectedExceptThisOption);
      }
      const checkedOption = options.find((o) => o.value === value);
      checkedOption && onChange([...selectedExceptThisOption, checkedOption]);
    },
    [disabled, options, onChange, selectedOptions],
  );
  return (
    <Question>
      {title && <Title>{title}</Title>}
      <Choices>
        {options.map((o) => (
          <Checkbox
            key={o.value}
            checked={selectedOptions.includes(o)}
            onChange={onOptionChange}
            value={o.value}
            label={o.label}
          />
        ))}
      </Choices>
      {description && <Description>{description}</Description>}
    </Question>
  );
};

export default CheckboxGroup;
