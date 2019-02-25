import React, { Component } from "react";
import { View, Image } from "react-native";
import { Button } from "@ant-design/react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import InputItem from "../../../components/InputItem";
import Logo from "../../../../assets/icon.png";
import firebase from "../../../Firebase";
export default class LoginUser extends Component {
    goto(page) {
        this.props.navigation.navigate(page);
    }
    register(email, password) {
        try {
            if (this.state.password.length < 8) {
                alert("please enter atleast 8 character");
            }
            else {
                firebase.auth().createUserWithEmailAndPassword(email, password);
                this.goto("HomeUser");
            }
        }
        catch (error) {
            alert(error.toString());
        }
    }
    render() {
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(Image, { source: Logo, resizeMode: "contain", style: styles.logo }),
            React.createElement(View, { style: styles.form },
                React.createElement(InputItem, { icon: React.createElement(MaterialCommunityIcons, { name: "email", size: 32 }), placeholder: "Your email address", onChangeText: (email) => this.setState({ email }) }),
                React.createElement(InputItem, { secureTextEntry: true, icon: React.createElement(MaterialCommunityIcons, { name: "lock", size: 32 }), placeholder: "Your password", onChangeText: (password) => this.setState({ password }) }),
                React.createElement(Button, { type: "primary", onPress: () => this.register(this.state.email, this.state.password) }, "Register"))));
    }
}
//# sourceMappingURL=index.js.map