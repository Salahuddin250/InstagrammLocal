import { type FC } from "react"
import cls from "./Spinner.module.scss"
import { classNames } from "@/shared/lib/classNames"

type SizeType = "m" | "s" | "l"
type VariantType = "primary" | "default" | "grey"

interface SpinnerProps {
  className?: string
  size?: SizeType
  variant?: VariantType
}

export const Spinner: FC<SpinnerProps> = ({ size = "s", variant = "default", className = "" }) => {
  const variantClasses: Record<VariantType, string> = {
    primary: cls.primary,
    default: cls.default,
    grey: cls.grey
  }
  const sizeClasses: Record<SizeType, string> = {
    m: cls.sizeM,
    s: cls.sizeS,
    l: cls.sizeL
  }
  const classes = [
    variant && variantClasses[variant],
    size && sizeClasses[size]
  ]

  return (
    <div className={className}>
        <div className={classNames(cls.ldsEllipsis, {}, classes)}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
