import Home from "@/shared/assets/svg/Home.svg"
import Comments from "@/shared/assets/svg//Comment.svg"
import Shape from "@/shared/assets/svg//Shape.svg"
import Add from "@/shared/assets/svg//add.svg"
import Favorite from "@/shared/assets/svg//favorite.svg"
import User from "@/shared/assets/svg//User.svg"
import Moon from "@/shared/assets/svg//Moon.svg"
import Sun from "@/shared/assets/svg//Sun.svg"


export type IconType = "Home" | "Comments" | "Shape" | "Add" | "Favorite" | "User" | "Sun" | "Moon"
 
export const iconName: Record<IconType, JSX.Element> = {
    Home: <Home/>,
    Comments: <Comments/>,
    Shape: <Shape/>,
    Add: <Add/>,
    Favorite: <Favorite/>,
    User: <User/>,
    Sun: <Sun/>,
    Moon: <Moon/>,
}