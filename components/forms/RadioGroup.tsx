import { useCallback } from 'react';
import { Option } from '../../types';
import Radio from './Radio';
import Title from './Title.style';
import Description from './Description.style';
import Choices from './Choices.style';
import Question from './Question.style';

interface Props {
  id: string;
  options: Option[];
  selectedOption: Option | null;
  onChange: (selected: Option | null) => void;
  title: string;
  description?: string;
  disabled?: boolean;
}

const RadioGroup = ({
  id,
  options,
  selectedOption,
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
      if (!checked) {
        return onChange(null);
      }
      const checkedOption = options.find((o) => o.value === value);
      checkedOption && onChange(checkedOption);
    },
    [disabled, options, onChange],
  );
  return (
    <Question>
      {title && <Title>{title}</Title>}
      <Choices>
        {options.map((o) => (
          <Radio
            key={`${id}-${o.value}`}
            group={id}
            checked={o === selectedOption}
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

export default RadioGroup;
