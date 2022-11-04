import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = memo((props) => {
  const { className, children, theme, square, size = ButtonSize.M, disabled, ...otherProps } = props;

  const mods: Record<string, boolean> = { [s.square]: square, [s.disabled]: disabled };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className, s[theme], s[size]])}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});
