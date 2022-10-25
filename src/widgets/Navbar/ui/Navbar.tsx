import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={handleToggleModal}>
        {t('signIn')}
      </Button>
      {/* eslint-disable-next-line */}
      <Modal onClose={handleToggleModal} isOpen={isAuthModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem hic consectetur pariatur
        ullam cum quia incidunt illo recusandae iste eligendi tenetur, debitis tempora a, quas voluptatum inventore
        nobis obcaecati?
      </Modal>
    </div>
  );
}
