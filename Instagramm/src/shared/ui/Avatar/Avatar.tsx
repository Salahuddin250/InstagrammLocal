import { type FC } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames";

export type AvatarSize = 25 | 34 | 39 | 45 | 50 | 142 | 180;
type AvatarVariant = "default" | "stories";

const sizeClasses: Record<AvatarSize, string> = {
  25: cls.size25,
  34: cls.size34,
  39: cls.size39,
  45: cls.size45,
  50: cls.size50,
  142: cls.size142,
  180: cls.size180
};
const variantClasses: Record<AvatarVariant, string> = {
  default: cls.default,
  stories: cls.stories
};

interface AvatarProps {
  size?: AvatarSize
  variant?: AvatarVariant
  className?: string
  src?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { size = 50, variant = "default", className, src } = props;
  const classes = [
    size && sizeClasses[size],
    variant && variantClasses[variant],
    className
  ];
  return (
     <div className={classNames(cls.avatar, {}, classes)}>
        {src ? <img src={src} alt="" /> : "In"}
     </div>
  );
};
