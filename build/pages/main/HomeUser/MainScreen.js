import React, { Component } from "react";
import { Platform } from "react-native";
// import { NavigationScreenProp } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation";
import HomeTab from "./AppTabNavigation/HomeTab";
import OrderTab from "./AppTabNavigation/OrderTab";
import ProfileTab from "./AppTabNavigation/ProfileTab";
// interface IProps {
//     navigation: NavigationScreenProp<any, any>
// }
export default class MainScreen extends Component {
    render() {
        return (React.createElement(AppTabNavigator, null));
    }
}
const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    OrderTab: { screen: OrderTab },
    ProfileTab: { screen: ProfileTab },
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: Object.assign({}, Platform.select({
            android: {
                backgroundColor: "white",
            },
        })),
        activeTintColor: "#000",
        inactiveTintColor: "#d1cece",
        showLabel: false,
        showIcon: true,
    },
});
//# sourceMappingURL=MainScreen.js.map