import { useCallback } from 'react';

import { Option } from '../../types';
import Header from '../Header.style';
import Checkbox from './Checkbox';
import Description from './Description.style';
import Choices from './Choices.style';
import Question from './Question.style';

interface Props {
  id: string;
  options: Option[];
  selectedOptions: Option[];
  onChange: (selected: Option[]) => void;
  title: string;
  description?: string;
  disabled?: boolean;
}

const CheckboxGroup = ({
  id,
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
        (o) => o.value !== value
      );
      if (!checked) {
        return onChange(selectedExceptThisOption);
      }
      const checkedOption = options.find((o) => o.value === value);
      checkedOption && onChange([...selectedExceptThisOption, checkedOption]);
    },
    [disabled, options, onChange, selectedOptions]
  );
  return (
    <Question>
      {title && <Header>{title}</Header>}
      <Choices>
        {options.map((o) => (
          <Checkbox
            group={id}
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
