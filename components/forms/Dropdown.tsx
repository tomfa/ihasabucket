import { useCallback } from 'react';
import { Option } from '../../types';
import Header from '../Header.style';
import Description from './Description.style';
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
    (value: Option) => {
      if (disabled) {
        return;
      }
      onChange(value);
    },
    [disabled, options, onChange]
  );
  return (
    <Question>
      {title && <Header>{title}</Header>}
      <select
        value={selectedOption?.value}
        onChange={(e) =>
          onOptionChange(
            options.find((o) => o.value === e.target.value),
            true
          )
        }>
        {options.map((o) => (
          <option key={`${id}-${o.value}`} value={o.value} label={o.label} />
        ))}
      </select>

      {description && <Description>{description}</Description>}
    </Question>
  );
};

export default DropDown;
