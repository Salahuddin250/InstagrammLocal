import { classNames } from "@/shared/lib/classNames";
import { type FC, type ReactNode } from "react";
import { NavLink, type LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactNode
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, ...rest } = props;

  return (
    <NavLink
      className={classNames(cls.appLink, {}, [className])}
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
};
