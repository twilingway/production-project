import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectorProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}
const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = ({ className, value, onChange, readonly }: ICurrencySelectorProps) => {
  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      label="Укажите Валюту"
      options={options}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
};
