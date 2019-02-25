import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
export default class HomeItem extends Component {
    goto(page) {
        this.props.navigation.navigate(page);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(TouchableOpacity, { style: styles.containerItem, onPress: () => this.goto("OrderCreate") },
                React.createElement(View, { style: styles.imageContainerItem },
                    React.createElement(Image, { source: require("../../../../assets/mandi.jpeg"), resizeMode: "cover", style: styles.imageItem })),
                React.createElement(View, { style: { marginTop: 140 } },
                    React.createElement(Text, { style: { fontSize: 18, color: "white" } }, "Cleanly Pet"),
                    React.createElement(Text, { style: { fontSize: 12, marginTop: 5, color: "white" } }, "cleanning"),
                    React.createElement(Text, { style: { marginTop: 20, textAlign: "justify", fontSize: 13 } }, "package for your hygiene pet"))),
            React.createElement(TouchableOpacity, { style: styles.containerItem, onPress: () => this.goto("OrderCreate") },
                React.createElement(View, { style: styles.imageContainerItem },
                    React.createElement(Image, { source: require("../../../../assets/checkup.jpeg"), resizeMode: "cover", style: styles.imageItem })),
                React.createElement(View, { style: { marginTop: 140 } },
                    React.createElement(Text, { style: { fontSize: 18, color: "white" } }, "Healthy Pet"),
                    React.createElement(Text, { style: { fontSize: 12, marginTop: 5, color: "white" } }, "Healthy"),
                    React.createElement(Text, { style: { marginTop: 20, textAlign: "justify", fontSize: 13 } }, "Package For your health pet")))));
    }
}
//# sourceMappingURL=HomeItem.js.map