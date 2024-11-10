import Logo from "@/shared/assets/Logo.png";
import { NavMenu, NavSearch } from "../../ui";
import cls from "./Navbar.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";

export const Navbar = () => {

  const {theme} = useContext(ThemeContext)
    

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>

          <img className={theme === Theme.DARK && cls.dark} src={Logo} alt="Instagramm" />

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
