import { type FC } from "react";
import cls from "./Icon.module.scss";
import { type IconType, iconName } from "./IconName";
import { classNames } from "@/shared/lib/classNames";

interface IconProps {
  type: IconType
  className?: string
  onClick?: (value: any) => void
}

export const Icon: FC<IconProps> = ({ type, className, onClick }) => {
  const classes = [className];
  return (
     <div onClick={onClick} className={classNames(cls.icon, {}, classes)}>{iconName[type]}</div>
  );
};
