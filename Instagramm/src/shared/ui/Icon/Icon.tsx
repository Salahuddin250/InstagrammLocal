import { useContext, type FC } from "react";
import cls from "./Icon.module.scss";
import { type IconType, iconName } from "./IconName";
import { type Mods, classNames } from "@/shared/lib/classNames";
import { Theme } from "@/shared/consts/theme";
import { ThemeContext } from "@/app/provider";

interface IconProps {
  type: IconType
  className?: string
  onClick?: (value: any) => void
}

export const Icon: FC<IconProps> = ({ type, className, onClick }) => {
  const { theme } = useContext(ThemeContext)

  const classes = [className];
  const mods: Mods = {
    [cls.dark]: theme === Theme.DARK
  }
  return (
     <div onClick={onClick} className={classNames(cls.icon, mods, classes)}>{iconName[type]}</div>
  );
};
