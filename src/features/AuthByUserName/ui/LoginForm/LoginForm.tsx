import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input } from 'shared/ui';
import s from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <Input autofocus type="text" className={s.input} placeholder={t('Input username')} />
      <Input type="text" className={s.input} placeholder={t('Input password')} />
      <Button className={s.loginBtn}>{t('signIn')}</Button>
    </div>
  );
};
