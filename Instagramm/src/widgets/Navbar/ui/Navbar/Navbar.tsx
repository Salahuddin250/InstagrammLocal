import Logo from "@/shared/assets/Logo.png";
import { NavMenu, NavSearch } from "..";
import cls from "./Navbar.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import { AppLink, Button, HStack } from "@/shared/ui";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const auth = false

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img
            className={theme === Theme.DARK && cls.dark}
            src={Logo}
            alt="Instagramm"
          />

          <NavSearch />
          {auth
            ? (
            <NavMenu />
              )
            : (
            <HStack max={false} gap={22}>
              <Button className={cls.btn}><AppLink className={cls.link1} to="/login">Войти</AppLink></Button>
              <Button className={cls.btn} variant="outline"><AppLink className={cls.link2} to="/register">Регистрация</AppLink></Button>
            </HStack>
              )}
        </div>
      </div>
    </div>
  );
};
