/* eslint-disable max-len */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
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
      <Button data-testid="sidebar-toggle" onClick={handleToggle}>
        {t('toggle')}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
}
