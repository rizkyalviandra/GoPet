import React, { Component, cloneElement } from "react";
import { StyleSheet, View, Text, TextInput, } from "react-native";
export default class InputItem extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isFocused: false,
        };
    }
    render() {
        const props = this.props;
        const Icon = props.icon;
        return (React.createElement(View, { style: styles.container },
            !!!props.icon && (React.createElement(View, { style: styles.labelContainer },
                React.createElement(Text, null, props.label))),
            React.createElement(View, { style: [
                    styles.inputContainer,
                    { borderColor: this.state.isFocused ? "rgb(31,144,230)" : "grey" },
                ] },
                !!props.icon && (React.createElement(View, { style: styles.iconContainer }, cloneElement(Icon, {
                    color: this.state.isFocused ? "rgb(31,144,230)" : "grey",
                }))),
                React.createElement(TextInput, Object.assign({}, props, { style: styles.input, underlineColorAndroid: "transparent", placeholder: props.placeholder, onFocus: () => this.setState({ isFocused: true }), onBlur: () => this.setState({ isFocused: false }) })))));
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        marginBottom: 10,
        alignSelf: "center",
        alignItems: "center",
    },
    iconContainer: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10,
    },
    labelContainer: {
        flex: 1,
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: "row",
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        paddingHorizontal: 10,
        height: 50,
        justifyContent: "center",
    },
    input: {
        flex: 1,
    },
});
//# sourceMappingURL=InputItem.js.map