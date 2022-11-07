import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ITextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginAction, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

export interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(loginAction.setUsername(event.target.value));
    },
    [dispatch]
  );
  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(loginAction.setPassword(event.target.value));
    },
    [dispatch]
  );

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
