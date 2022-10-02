import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(s.pageError, {}, [className])}>
      <p>{t('something wrong')}</p>
      <Button onClick={reloadPage}>{t('refresh page')}</Button>
    </div>
  );
};
