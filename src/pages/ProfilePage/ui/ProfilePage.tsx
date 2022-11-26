import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui';
import { ITextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);

  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server error'),
    [ValidateProfileError.NO_DATA]: t('wrong data'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('wrong user data'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t(''),
    [ValidateProfileError.INCORRECT_AGE]: t('wrong age'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const handleChangeForm = useCallback(
    (value: { [key: string]: string | number }) => {
      console.log('value :>> ', value);
      dispatch(profileActions.updateProfile(value));
    },
    [dispatch]
  );
  const handleChangeCurrency = useCallback(
    (currency: Currency) => {
      console.log('currency :>> ', currency);
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (country: Country) => {
      console.log('Country :>> ', country);
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((error) => (
            <Text theme={ITextTheme.ERROR} text={validateErrorsTranslates[error]} key={error} />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeForm={handleChangeForm}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
