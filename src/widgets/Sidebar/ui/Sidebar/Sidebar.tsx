/* eslint-disable max-len */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export function Sidebar({ className }: ISidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation('sidebar');
  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        className={s.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
        {/* {t('toggle')} */}
      </Button>
      <div className={s.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={s.item}>
          <MainIcon className={s.icon} />
          <span className={s.link}>{t('main')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={s.item}>
          <AboutIcon className={s.icon} />
          <span className={s.link}>{t('about')}</span>
        </AppLink>
      </div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
}
