export type Option = {
  value: string;
  label: string;
};

export type Question = {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | string[] | number[];
  description?: string;
  options: Option[];
};
