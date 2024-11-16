import { forwardRef, type FC, type InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { type Mods, classNames } from "@/shared/lib/classNames";
import { spawn } from "child_process";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: string
  value?: string
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
  const { className = "", error, value = "", placeholder, ...rest } = props;

  const mods: Mods = {
    [cls.active]: Boolean(value),
    [cls.errorField]: Boolean(error)
  }

  return (
    <div className={classNames(cls.field, mods, [])}>
      <div className={cls.label}>
        <input ref={ref} value={value} className={classNames("", {}, [className])} {...rest} />
        {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
      </div>
      <span className={classNames(cls.error, { [cls.errorActive]: Boolean(error) }, [])}>{error}</span>
    </div>
  );
});
