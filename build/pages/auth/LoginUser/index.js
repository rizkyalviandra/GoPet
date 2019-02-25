import React, { Component } from "react";
import { View, Image } from "react-native";
import { Button, WhiteSpace } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../../../Firebase";
import styles from "./styles";
import InputItem from "../../../components/InputItem";
import Logo from "../../../../assets/icon.png";
export default class LoginUser extends Component {
    goto(page) {
        this.props.navigation.navigate(page);
    }
    login(email, password) {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => this.goto("HomeUser"));
        }
        catch (error) {
            alert(error.toString());
        }
    }
    render() {
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(Image, { source: Logo, resizeMode: "contain", style: styles.logo }),
            React.createElement(View, { style: styles.form },
                React.createElement(InputItem, { autoCapitalize: "none", icon: React.createElement(MaterialCommunityIcons, { name: "email", size: 32 }), onChangeText: (email) => this.setState({ email }), placeholder: "Your email address" }),
                React.createElement(InputItem, { secureTextEntry: true, icon: React.createElement(MaterialCommunityIcons, { name: "lock", size: 32 }), onChangeText: (password) => this.setState({ password }), placeholder: "Your password" }),
                React.createElement(Button, { type: "primary", onPress: () => this.login(this.state.email, this.state.password) }, "Login"),
                React.createElement(WhiteSpace, null),
                React.createElement(Button, { type: "ghost", onPress: () => this.goto("Register") }, "Register"))));
    }
}
//# sourceMappingURL=index.js.map