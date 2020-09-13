import Label from './Label.style';
import Input from './Input.style';

interface Props {
  checked: boolean;
  onChange: (value: string | number, isChecked: boolean) => void;
  value: string | number;
  label: string;
  disabled?: boolean;
  group: string;
}

const Checkbox = ({
  checked,
  onChange,
  value,
  label,
  group,
  disabled = false,
}: Props) => {
  const name = `${group}-${value}`;

  return (
    <>
      <Input
        id={name}
        value={value}
        name={name}
        type="checkbox"
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

export default Checkbox;
