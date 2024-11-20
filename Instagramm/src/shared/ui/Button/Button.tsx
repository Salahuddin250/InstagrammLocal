import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import cls from "./Button.module.scss";
import { type Mods, classNames } from "@/shared/lib/classNames";
import { Spinner } from "../Spinner/Spinner";

type ButtonVariant = "default" | "outline";
type PaddingType = 5 | 10 | 15 | 20;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  addonLeft?: JSX.Element
  addonRight?: JSX.Element
  variant?: ButtonVariant
  children: ReactNode
  max?: boolean
  padding?: PaddingType
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = "default",
    disabled,
    loading,
    children,
    addonLeft,
    addonRight,
    max = false,
    padding,
    ...rest
  } = props;
  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    outline: cls.outline
  };
  const paddingClasses: Record<PaddingType, string> = {
    5: cls.pad5,
    10: cls.pad10,
    15: cls.pad15,
    20: cls.pad20
  };

  const classes = [variant && variantClasses[variant], padding && paddingClasses[padding], className];

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.max]: max
  };
  return (
     <button className={classNames(cls.btn, mods, classes)} {...rest}>
        {addonLeft}
        {loading ? <Spinner size="s" className={cls.loading} ></Spinner> : children}
        {addonRight}
     </button>
  );
};
