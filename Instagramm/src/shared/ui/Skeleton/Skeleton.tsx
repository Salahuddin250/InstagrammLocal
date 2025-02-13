import { type CSSProperties, type FC } from "react"
import cls from "./Skeleton.module.scss"
import { classNames } from "@/shared/lib/classNames"

interface SkeletonProps {
  className?: string
  width?: number | string
  height?: number | string
  radius?: number | string
}

export const Skeleton: FC<SkeletonProps> = ({ className = "", width, height, radius }) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: radius
  }

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles}/>
  )
}
