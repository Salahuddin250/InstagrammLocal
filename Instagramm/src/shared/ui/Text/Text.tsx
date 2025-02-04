import { memo, type FC, type ReactNode } from "react";
import cls from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames";

export type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
export type TextSize = 10 | 12 | 13 | 14 | 16 | 18 | 24;
export type TextFw = 300 | 400 | 500 | 600 | 700 | 800;
export type TextAlign = "center" | "left" | "right";
export type TextColor = "default" | "gray" | "red" | "error";

const textClasses: Record<TextSize, string> = {
  10: cls.size10,
  12: cls.size12,
  13: cls.size13,
  14: cls.size14,
  16: cls.size16,
  18: cls.size18,
  24: cls.size24
};
const fWClasses: Record<TextFw, string> = {
  300: cls.fw300,
  400: cls.fw400,
  500: cls.fw500,
  600: cls.fw600,
  700: cls.fw700,
  800: cls.fw800
};
const alignClasses: Record<TextAlign, string> = {
  center: cls.center,
  left: cls.left,
  right: cls.right
};
const colorClasses: Record<TextColor, string> = {
  default: cls.default,
  gray: cls.gray,
  red: cls.red,
  error: cls.error
};

interface TextProps {
  children?: ReactNode
  as?: AsType
  size?: TextSize
  fw?: TextFw
  className?: string
  align?: TextAlign
  color?: TextColor
  onClick?: () => void
}

export const Text: FC<TextProps> = memo((props) => {
  const { children, as = "h2", size = 14, fw = 300, className = "", align, color = 'default', onClick } = props;

  const classes = [size && textClasses[size], fw && fWClasses[fw], align && alignClasses[align], color && colorClasses[color], className];

  const getAs = {
    h1: <h1 onClick={onClick} className={classNames("", {}, classes)}>{children}</h1>,
    h2: <h2 onClick={onClick} className={classNames("", {}, classes)}>{children}</h2>,
    h3: <h3 onClick={onClick} className={classNames("", {}, classes)}>{children}</h3>,
    h4: <h4 onClick={onClick} className={classNames("", {}, classes)}>{children}</h4>,
    h5: <h5 onClick={onClick} className={classNames("", {}, classes)}>{children}</h5>,
    h6: <h6 onClick={onClick} className={classNames("", {}, classes)}>{children}</h6>,

    span: <span onClick={onClick} className={classNames("", {}, classes)}>{children}</span>,
    p: <p onClick={onClick} className={classNames("", {}, classes)}>{children}</p>
  };

  return getAs[as];
});
