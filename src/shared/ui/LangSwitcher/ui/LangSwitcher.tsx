import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={classNames(s.langSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} onClick={handleToggle}>
      {t(short ? 'short lang' : 'Язык')}
    </Button>
  );
});
