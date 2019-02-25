import { Button, Carousel } from "@ant-design/react-native";
import React, { Component } from "react";
import { View } from "react-native";
import CarouselItem from "./CarouselItem";
export default class Welcome extends Component {
    gotoLoginUser() {
        this.props.navigation.navigate("LoginUser");
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Carousel, null,
                React.createElement(CarouselItem, { imageSource: require("../../../../assets/welcome-image-1.png"), title: "Go-Pet", description: "Make your pet clean and healthy without come to pet shop" }),
                React.createElement(CarouselItem, { imageSource: require("../../../../assets/welcome-image-1.png"), title: "Go-Pet", description: "Make your pet clean and healthy without come to pet shop" },
                    React.createElement(Button, { type: "ghost", onPress: () => this.gotoLoginUser() }, "Continue")))));
    }
}
//# sourceMappingURL=index.js.map