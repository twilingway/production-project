import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ITextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginAction } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginAction.setUsername(value));
    },
    [dispatch]
  );
  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginAction.setPassword(value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(s.loginForm, {}, [className])}>
      <Text title={t('formAutoriation')} />
      {error && <Text text={error} theme={ITextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={s.input}
        placeholder={t('Input username')}
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={s.input}
        placeholder={t('Input password')}
        onChange={handleChangePassword}
        value={password}
      />
      <Button theme={ButtonTheme.OUTLINE} className={s.loginBtn} onClick={handleLoginClick} disabled={isLoading}>
        {t('signIn')}
      </Button>
    </div>
  );
});
