import Label from './Label.style';
import Input from './Input.style';

interface Props {
  checked: boolean;
  group: string;
  onChange: (value: string | number, isChecked: boolean) => void;
  value: string | number;
  label: string;
  disabled?: boolean;
}

const Radio = ({
  checked,
  group,
  onChange,
  value,
  label,
  disabled = false,
}: Props) => {
  const name = `${group}-${value}`;
  return (
    <>
      <Input
        id={name}
        value={value}
        name={name}
        type="radio"
        group={group}
        checked={checked}
        onChange={() => !disabled && onChange(value, !checked)}
        disabled={disabled}
      />
      <Label htmlFor={name} checked={checked}>
        {label}
      </Label>
    </>
  );
};

export default Radio;
