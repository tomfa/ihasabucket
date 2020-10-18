import React, { useCallback, useEffect, useState } from 'react';

import Header from '../Header.style';
import { sleep } from '../utils';
import Description from './Description.style';
import Question from './Question.style';
import Input from './Input.style';
import InputContainer from './InputContainer.styles';
import SubmitButton from './SubmitButton.styles';

interface Props {
  id: string;
  value?: string;
  onChange: (selected: string) => void;
  onSubmit: (selected: string) => void;
  title: string;
  placeholder?: string;
  placeholders?: string[];
  description?: string;
  disabled?: boolean;
}

const TextInput = ({
  id,
  onChange,
  onSubmit,
  value = '',
  title,
  placeholder,
  placeholders,
  description,
}: Props) => {
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(
    placeholders?.length ? 0 : -1
  );
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState<string>(
    placeholderIndex === -1 ? placeholder : placeholders[placeholderIndex]
  );
  useEffect(() => {
    if (!placeholders || placeholders.length < 2) {
      return;
    }
    updatePlaceHolderDelayed(
      placeholders,
      placeholderIndex,
      setPlaceholderIndex,
      setCurrentPlaceHolder
    );
  }, [placeholderIndex]);

  const cleanInput = useCallback((val: string) => {
    if (!val) {
      return '';
    }
    return val.toLowerCase().replace(' ', '-');
  }, []);
  const submit = useCallback(
    (submitValue) => {
      onSubmit(cleanInput(submitValue));
    },
    [onSubmit, cleanInput]
  );

  return (
    <Question id={id}>
      {title && <Header>{title}</Header>}
      <InputContainer>
        <Input
          type="text"
          value={value || ''}
          placeholder={currentPlaceHolder}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && submit(value)}
          onBlur={() => submit(value)}
        />
        <SubmitButton
          type="submit"
          complete={value && value.trim().length > 0}
          onClick={() => submit(value)}
        />
      </InputContainer>
      {description && <Description>{description}</Description>}
    </Question>
  );
};

const updatePlaceHolderDelayed = async (
  placeholders: string[],
  placeholderIndex: number,
  setPlaceholderIndex: any,
  setCurrentPlaceHolder: (value: string) => void,
  delayMs: number = 7000
) => {
  await sleep(delayMs);
  const oldPlaceHolder = placeholders[placeholderIndex % placeholders.length];
  const newPlaceHolder =
    placeholders[(placeholderIndex + 1) % placeholders.length];
  const steps = oldPlaceHolder.length + newPlaceHolder.length + 4;
  const stepSizeMs = 25;
  for (let i = 0; i <= steps; i++) {
    const shouldRemove = i <= oldPlaceHolder.length;
    const shouldAdd = steps - i <= newPlaceHolder.length;
    if (shouldRemove) {
      setCurrentPlaceHolder(
        oldPlaceHolder.substr(0, oldPlaceHolder.length - i)
      );
    } else if (shouldAdd) {
      setCurrentPlaceHolder(
        newPlaceHolder.substr(0, newPlaceHolder.length - (steps - i))
      );
    }
    //  – it's ok in a for loop
    // eslint-disable-next-line no-await-in-loop
    await sleep(stepSizeMs);
  }
  setPlaceholderIndex((index) => index + (1 % placeholders.length));
};

export default TextInput;
