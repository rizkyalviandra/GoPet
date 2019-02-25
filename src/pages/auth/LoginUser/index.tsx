import React, { Component } from "react"
import { View, Image } from "react-native"
import { Button, WhiteSpace } from "@ant-design/react-native"
import { NavigationScreenProp } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import firebase from "../../../Firebase"

import styles from "./styles"
import InputItem from "../../../components/InputItem"
import Logo from "../../../../assets/icon.png"

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

interface IMainState {
    email: string
    password: string
}

export default class LoginUser extends Component<IProps, IMainState> {
    public goto(page: string) {
        this.props.navigation.navigate(page)
    }

    public login(email: string, password: string) {

        try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => this.goto("HomeUser"))
        } catch (error) {
            alert(error.toString())
        }
    }

    public render() {
        return(

            <View style={styles.wrapper}>

                <Image source={Logo} resizeMode="contain" style={styles.logo} />

                <View style={styles.form}>

                    <InputItem
                        autoCapitalize= "none"
                        icon={
                            <MaterialCommunityIcons name="email" size={32} />
                        }
                        onChangeText= {(email) => this.setState ({ email }) }
                        placeholder="Your email address"
                    />

                    <InputItem
                        secureTextEntry
                        icon={<MaterialCommunityIcons name="lock" size={32} />}
                        onChangeText= {(password) => this.setState ({ password }) }
                        placeholder="Your password"
                    />

                    <Button
                    type="primary"
                    onPress={() => this.login(this.state.email, this.state.password)}
                    >
                    Login
                    </Button>

                    <WhiteSpace />

                    <Button type="ghost" onPress={() => this.goto("Register")}>
                        Register
                    </Button>

                </View>

            </View>
        )
    }
}
