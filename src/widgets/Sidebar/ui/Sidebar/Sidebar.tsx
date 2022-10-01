import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import s from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={handleToggle}>TOOGLE</Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
