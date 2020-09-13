interface Props {
  checked: boolean;
  onChange: (value: string | number, isChecked: boolean) => void;
  value: string | number;
  label: string;
  disabled?: boolean;
}

const Checkbox = ({
  checked,
  onChange,
  value,
  label,
  disabled = false,
}: Props) => {
  const name = String(value);
  return (
    <label htmlFor={name}>
      <input
        id={name}
        value={value}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={() => !disabled && onChange(value, !checked)}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
