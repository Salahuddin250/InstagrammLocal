import React, { type FC, type ReactNode } from "react";
import cls from "./Flex.module.scss";
import { type Mods, classNames } from "@/shared/lib/classNames";

type DirectionType = "row" | "column";
type JustifyType = "center" | "start" | "end" | "between";
type AlignType = "center" | "start" | "end";
type GapType = 0 | 4 | 8 | 12 | 16 | 18 | 22 | 26 | 28 | 32 | 36 | 40;
type WrapType = "wrap" | "nowrap"

export interface FlexProps {
  children?: ReactNode
  direction: DirectionType
  justify?: JustifyType
  align?: AlignType
  gap?: GapType
  max?: boolean
  className?: string
  wrap?: WrapType
}

export const Flex: FC<FlexProps> = (props) => {
  const { children, direction, justify = "start", align = "center", gap = 0, max = true, wrap = "nowrap", className } = props;

  const directionClasses: Record<DirectionType, string> = {
    column: cls.column,
    row: cls.row
  }
  const justifyClasses: Record<JustifyType, string> = {
    center: cls.j_center,
    start: cls.j_start,
    end: cls.j_end,
    between: cls.j_between
  }
  const alignClasses: Record<AlignType, string> = {
    center: cls.a_center,
    start: cls.a_start,
    end: cls.a_end
  }
  const gapClasses: Record<GapType, string> = {
    0: cls.g_0,
    4: cls.g_4,
    8: cls.g_8,
    12: cls.g_12,
    16: cls.g_16,
    18: cls.g_18,
    22: cls.g_22,
    26: cls.g_26,
    28: cls.g_28,
    32: cls.g_32,
    36: cls.g_36,
    40: cls.g_40
  }
  const wrapClasses: Record<WrapType, string> = {
    wrap: cls.wrap,
    nowrap: cls.nowrap
  }
  const classes = [direction && directionClasses[direction], justify && justifyClasses[justify], align && alignClasses[align], gap && gapClasses[gap], wrap && wrapClasses[wrap], className]

  const mods: Mods = {
    [cls.max]: max
  }

  return <div className={classNames(cls.flex, mods, classes)}>{children}</div>;
};
