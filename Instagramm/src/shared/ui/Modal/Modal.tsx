import { type ReactNode, type FC } from "react"
import cls from "./Modal.module.scss"
import { classNames } from "@/shared/lib/classNames"

interface ModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, onClose, className, children } = props

  return (
    <div className={classNames(cls.modal, { [cls.modalActive]: isOpen }, [className])}>
        <div className={cls.box}>

            <span onClick={onClose} className={cls.close}>&times;</span>

            <div className={cls.content}>{children}</div>
        </div>
    </div>
  )
}
