import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import HomeItem from "./HomeItem"
import Order from "../Order"

export default createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeItem},
    Order: {screen: Order},
  },
)
