import { classNames } from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';

export enum ITextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ITextTheme;
}

export const Text = (props: ITextProps) => {
  const { title, text, className, theme = ITextTheme.PRIMARY } = props;
  return (
    <div className={classNames(s.textWrapper, { [s[theme]]: true }, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
