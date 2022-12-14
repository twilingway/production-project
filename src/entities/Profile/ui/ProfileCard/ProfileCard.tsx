import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar, Loader } from 'shared/ui';
import { Input } from 'shared/ui/Input/Input';
import { ITextTheme, Text, TextAlign } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeForm: (value: { [key: string]: string | number }) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, error, isLoading, readonly, onChangeForm, onChangeCurrency, onChangeCountry } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeForm({
      [event.target.name]: event.target.type === 'number' ? Number(event.target.value) : event.target.value,
    });
  };

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={ITextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        <form onSubmit={handleFormSubmit}>
          <fieldset disabled={readonly} style={{ border: 'none' }}>
            <div className={cls.avatarWrapper}>
              <Avatar src={data?.avatar} alt="Avatar" />
            </div>

            <Input
              value={data?.first}
              placeholder={t('firstName')}
              className={cls.input}
              name="first"
              onChange={handleChange}
            />
            <Input
              value={data?.lastname}
              placeholder={t('lastName')}
              className={cls.input}
              name="lastname"
              onChange={handleChange}
            />
            <Input
              value={data?.age}
              placeholder={t('age')}
              className={cls.input}
              name="age"
              onChange={handleChange}
              type="number"
            />

            <Input
              value={data?.city}
              placeholder={t('city')}
              className={cls.input}
              name="city"
              onChange={handleChange}
            />
            <Input
              value={data?.username}
              placeholder={t('username')}
              className={cls.input}
              name="username"
              onChange={handleChange}
            />
            <Input
              value={data?.avatar}
              placeholder={t('avatar')}
              className={cls.input}
              name="avatar"
              onChange={handleChange}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              className={cls.input}
              readonly={readonly}
            />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} className={cls.input} />
          </fieldset>
        </form>
      </div>
    </div>
  );
};
