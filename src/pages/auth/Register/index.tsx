import React, { Component } from "react"
import { View, Image } from "react-native"
import { Button } from "@ant-design/react-native"
import { NavigationScreenProp } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import styles from "./styles"
import InputItem from "../../../components/InputItem"
import Logo from "../../../../assets/icon.png"
import firebase from "../../../Firebase"

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

    public register(email: string, password: string) {
        try {
            if (this.state.password.length < 8) {
                alert("please enter atleast 8 character")
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                this.goto("HomeUser")
            }
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
                    icon={
                        <MaterialCommunityIcons name="email" size={32} />
                    }
                        placeholder="Your email address"
                        onChangeText= {(email) => this.setState ({ email }) }
                    />

                    <InputItem
                        secureTextEntry
                        icon={<MaterialCommunityIcons name="lock" size={32} />}
                        placeholder="Your password"
                        onChangeText= {(password) => this.setState ({ password }) }
                    />

                    <Button
                    type="primary"
                    onPress={() => this.register(this.state.email, this.state.password)}
                    >
                    Register
                    </Button>

                </View>

            </View>
        )
    }
}
