import { getUserAuthData, userAction } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation('navbar');
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);

  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userAction.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(s.navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={handleLogout}>
          {t('logOut')}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={handleOpenModal}>
        {t('signIn')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />}
    </div>
  );
}
