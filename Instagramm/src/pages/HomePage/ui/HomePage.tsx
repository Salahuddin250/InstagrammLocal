import { useTranslation } from "react-i18next"
import cls from "./HomePage.module.scss"

const HomePage = () => {
  const {t} = useTranslation()

  return (
    <div>
      {t("Главная страница")}
    </div>
  )
}

export default HomePage