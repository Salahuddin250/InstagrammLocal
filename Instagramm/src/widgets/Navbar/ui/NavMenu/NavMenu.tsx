import { AppLink, Avatar, DropDown, Icon, Text } from "@/shared/ui";
import cls from "./NavMenu.module.scss";
import { type INavMenuItem } from "../../model/consts/navMenu";
import { useCallback, useContext } from "react";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import { SwitchButton } from "@/features";
import { classNames } from "@/shared/lib/classNames";
import { Link } from "react-router-dom";
import { LangSwitch } from "@/widgets";
import { type MenuProps } from "antd";
import { useSelector } from "react-redux";
import { getAuthData, logout } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { AddPostModal, addPostModalActions, getAddPostModalOpen } from "@/features/AddPostModal";

export const NavMenu = () => {
  const dispatch = useAppDispatch()
  const { theme } = useContext(ThemeContext);
  const authData = useSelector(getAuthData)
  const isOpenAddPostModal = useSelector(getAddPostModalOpen)

  const onCloseAddPostModal = useCallback(() => {
    dispatch(addPostModalActions.setIsAddPostModal(false))
  }, [isOpenAddPostModal])

  const navMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home"
    },
    {
      href: "/",
      iconType: "Comments"
    },
    {
      href: "/",
      iconType: "Shape"
    },
    {
      iconType: "Add",
      onClick: () => dispatch(addPostModalActions.setIsAddPostModal(true))
    },
    {
      href: "/",
      iconType: "Favorite"
    }
  ];

  const dropDownItems: MenuProps["items"] = [
    {
      label: <Text color="red">{authData.fullname}</Text>,
      key: 0
    },
    {
      label: <AppLink to={`/profile/${authData._id}`}><Text color="default">Профиль</Text></AppLink>,
      key: 1
    },
    {
      label: <Text color="default">Сменить тему</Text>,
      key: 2
    },
    {
      label: <Text color="default">Настройки</Text>,
      key: 3
    },
    {
      label: <Text color="default">Выйти</Text>,
      onClick: async () => await dispatch(logout()),
      key: 4
    }
  ]

  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {navMenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                cls.item,
                { [cls.dark]: theme === Theme.DARK },
                []
              )}
            >
              {item.href
                ? (
                <Link to={item.href} className={cls.link}>
                  <Icon type={item.iconType} />
                </Link>
                  )
                : (
                <Icon type={item.iconType} onClick={item.onClick} />
                  )}
            </li>
          );
        })}

        <AddPostModal isOpen={isOpenAddPostModal} onClose={onCloseAddPostModal}/>

        <li
          className={classNames(
            cls.item,
            { [cls.dark]: theme === Theme.LIGHT },
            []
          )}
        >
          <SwitchButton />
        </li>
        <li>
          <LangSwitch />
        </li>
        <li>
          <DropDown items={dropDownItems} placement="bottomLeft">
            <Avatar
              size={25}
              src={authData?.avatar}
            />
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};
