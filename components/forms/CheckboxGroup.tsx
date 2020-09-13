import { useCallback } from 'react';
import { Option } from './types';
import Checkbox from './Checkbox';

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
    <>
      {title && <h2>{title}</h2>}
      {options.map((o) => (
        <Checkbox
          key={o.value}
          checked={selectedOptions.includes(o)}
          onChange={onOptionChange}
          value={o.value}
          label={o.label}
        />
      ))}
      {description && <p>{description}</p>}
    </>
  );
};

export default CheckboxGroup;
