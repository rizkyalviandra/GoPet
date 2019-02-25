import { createAppContainer, createSwitchNavigator } from "react-navigation"
import SplashScreen from "../pages/SplashScreen"
import authRoute from "./auth"
import mainRoute from "./main"

export default createAppContainer(
    createSwitchNavigator({
        SplashScreen,
        authRoute,
        mainRoute,
    }),
)
