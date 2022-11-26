import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option className={s.option} key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(s.wrapper, mods, [className])}>
      {label && <span className={s.label}>{`${label}>`}</span>}
      <select className={s.select} value={value} onChange={handleChange} disabled={readonly}>
        {optionList}
      </select>
    </div>
  );
});
