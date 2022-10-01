import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: ILangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(s.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={handleToggle}
    >
      {t('Язык')}
    </Button>
  );
}
