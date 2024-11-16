import { type FormHTMLAttributes, type FC, type ReactNode } from "react"
import cls from "./Form.module.scss"
import { classNames } from "@/shared/lib/classNames"

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  className?: string
}

export const Form: FC<FormProps> = (props) => {
  const { children, className = "", ...rest } = props
  return (
    <form className={classNames(cls.form, {}, [className])} {...rest}>
        {
            children
        }
    </form>
  )
}
