import { classNames } from "@/shared/lib/classNames";
import { Dropdown, type MenuProps, type DropDownProps, Space } from "antd";
import { type FC, type ReactNode } from "react";

interface CustomDropDownProps extends DropDownProps {
  items: MenuProps["items"]
  children: ReactNode
  className?: string
  onClick?: (value?: any) => void
}

export const DropDown: FC<CustomDropDownProps> = (props) => {
  const { items, className, children, onClick, ...rest } = props;

  return (
    <Dropdown
      menu={{ items, onClick }}
      trigger={["click"]}
      className={classNames("dropdown", {}, [])}
      {...rest}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {children}
      </a>
    </Dropdown>
  );
};
