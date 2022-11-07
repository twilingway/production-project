import React, { InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: IInputProps) => {
  const { className, value, onChange, type = 'text', placeholder, autofocus, readonly = false, ...otherProps } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    if (event.target instanceof HTMLInputElement) {
      setCaretPosition(event.target.selectionStart || 0);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setCaretPosition(event.target.value.length);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [s.readonly]: readonly,
  };

  return (
    <div className={classNames(s.inputWrapper, mods, [className])}>
      {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange}
          className={s.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isFocused && <span className={s.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
