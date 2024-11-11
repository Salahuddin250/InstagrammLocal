import { Avatar, Icon } from "@/shared/ui";
import cls from "./NavMenu.module.scss";
import { type INavMenuItem } from "../../model/consts/navMenu";
import { useContext } from "react";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import { SwitchButton } from "@/features";
import { classNames } from "@/shared/lib/classNames";
import { Link } from "react-router-dom";
import { LangSwitch } from "@/widgets";

export const NavMenu = () => {
  const { theme } = useContext(ThemeContext)

  const navMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home"
    },
    {
      href: "/login",
      iconType: "Comments"
    },
    {
      href: "/register",
      iconType: "Shape"
    },
    {
      iconType: "Add"
    },
    {
      href: "/",
      iconType: "Favorite"
    }

  ];

  return (
     <nav className={cls.nav}>
        <ul className={cls.list}>
           {navMenuItems.map((item, index) => {
             return (
                <li key={index} className={classNames(cls.item, { [cls.dark]: theme === Theme.DARK }, [])}>
                   {item.href
                     ? (
                        <Link to={item.href} className={cls.link}>
                           <Icon type={item.iconType} />
                        </Link>
                       )
                     : (
                        <Icon type={item.iconType} />
                       )}
                </li>
             );
           })}
           <li className={classNames(cls.item, { [cls.dark]: theme === Theme.LIGHT }, [])}>
              <SwitchButton/>
           </li>
           <li>
              <LangSwitch/>
           </li>
           <li>
              <Avatar size={25} src="https://avatars.mds.yandex.net/i?id=36820f824f6b254fbd029faf70b401cee1dcaac9a6e6975f-7549266-images-thumbs&n=13"/>
           </li>
        </ul>
     </nav>
  );
};
