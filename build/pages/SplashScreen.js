import React, { Component } from "react";
import { View, Image } from "react-native";
import SplashImage from "../../assets/splash.png";
export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate("Welcome"), 1000);
    }
    render() {
        return (React.createElement(View, { style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
            } },
            React.createElement(Image, { source: SplashImage })));
    }
}
//# sourceMappingURL=SplashScreen.js.map