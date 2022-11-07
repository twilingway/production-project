import { classNames, Mods } from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';

export enum ITextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ITextTheme;
  align?: TextAlign;
}

export const Text = (props: ITextProps) => {
  const { title, text, className, theme = ITextTheme.PRIMARY, align = TextAlign.LEFT } = props;

  const mods: Mods = {};

  return (
    <div className={classNames(s.textWrapper, mods, [className, s[theme], s[align]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
