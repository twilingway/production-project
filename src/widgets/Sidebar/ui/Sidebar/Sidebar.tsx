/* eslint-disable max-len */
import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const itemList = useMemo(
    () => SidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed]
  );

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
      <div className={s.items}>{itemList}</div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
});
