import { WhiteSpace } from "@ant-design/react-native";
import React, { Component } from "react";
import { Image, Text, View, } from "react-native";
import styles from "./styles";
export default class CarouselItem extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { style: styles.image, source: this.props.imageSource, resizeMode: "contain" }),
            React.createElement(View, { style: styles.textContainer },
                React.createElement(WhiteSpace, null),
                React.createElement(WhiteSpace, null),
                React.createElement(Text, { style: styles.title }, this.props.title),
                React.createElement(Text, { style: styles.description }, this.props.description),
                React.createElement(WhiteSpace, null),
                React.createElement(WhiteSpace, null),
                this.props.children)));
    }
}
//# sourceMappingURL=CarouselItem.js.map