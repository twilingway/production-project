import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import s from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation('navbar');
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>/</div>
    </div>
  );
}
