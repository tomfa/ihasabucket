import Label from './Label.style';
import Input from './Input.style';

interface Props {
  checked: boolean;
  onChange: (value: string | number, isChecked: boolean) => void;
  value: string | number;
  label: string;
  disabled?: boolean;
}

const Radio = ({
  checked,
  onChange,
  value,
  label,
  disabled = false,
}: Props) => {
  const name = String(value);
  return (
    <Label htmlFor={name} checked={checked}>
      <Input
        id={name}
        value={value}
        name={name}
        type="radio"
        checked={checked}
        onChange={() => !disabled && onChange(value, !checked)}
        disabled={disabled}
      />
      <span>{label}</span>
    </Label>
  );
};

export default Radio;
