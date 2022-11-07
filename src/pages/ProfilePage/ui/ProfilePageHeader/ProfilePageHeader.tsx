import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import s from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(s.profilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {readonly ? (
        <Button className={s.editBtn} theme={ButtonTheme.OUTLINE} onClick={handleEdit}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button className={s.cancelBtn} theme={ButtonTheme.OUTLINE_RED} onClick={handleCancelEdit}>
            {t('cancel')}
          </Button>
          <Button className={s.saveBtn} theme={ButtonTheme.OUTLINE} onClick={handleSave}>
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
