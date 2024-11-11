import { Theme } from "@/shared/consts/theme";
import { useTheme } from "@/shared/hooks/useTheme";
import { Icon } from "@/shared/ui";

export const SwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
     <>
        <div onClick={toggleTheme}>
           {theme === Theme.DARK && <Icon type="Sun" />}
        </div>
        <div onClick={toggleTheme}>
           {theme === Theme.LIGHT && <Icon type="Moon" />}
        </div>
     </>
  );
};
