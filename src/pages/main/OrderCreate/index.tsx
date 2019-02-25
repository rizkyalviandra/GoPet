import React, { Component } from "react"
import { KeyboardAvoidingView } from "react-native"
import { NavigationScreenProp, NavigationStackScreenOptions } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Button } from "@ant-design/react-native"

import styles from "./styles"
import InputItem from "../../../components/InputItem"
import firebase from "../../../Firebase"

const rootRef = firebase.database().ref()
const orderRef = rootRef.child("orders")

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

interface IState {
    orderName: string
    orderAddress: string
    orderKind: string
    orders: []
}

export default class OrderCreare extends Component<IProps, IState> {
    public static navigationOptions: NavigationStackScreenOptions = {
        title: "Make Your Order",
    }

    constructor(props: IProps) {
        super(props)
        this.state = ({
            orderName: "",
            orderAddress: "",
            orderKind: "",
            orders: [],
        })
    }

    public componentDidMount() {
        orderRef.on("value", (childSnapShot) => {
            const orders = []
            childSnapShot.forEach((doc) => {
                orders.push({
                    key: doc.key,
                    orderName: doc.toJSON().orderName,
                    orderAddress: doc.toJSON().orderAddress,
                    orderKind: doc.toJSON().orderKind,
                })
                this.setState({
                    orders: orders.sort((a, b) => {
                        return (a.orderName < b.orderName)
                    }),
                })
            })
        })
    }

    public goto(page: string) {
        this.props.navigation.navigate(page)
    }

    public addOrder = () => {
        if ((this.state.orderName.trim() === "") ||
            (this.state.orderAddress.trim() === "") ||
            (this.state.orderKind.trim() === "") ) {
                alert("Column Cant Empty")
        } else {
            orderRef.push({
                orderName: this.state.orderName,
                orderAddress: this.state.orderAddress,
                orderKind: this.state.orderKind,
            })

            this.goto("Order")
        }
    }

    public render() {
        return(
            <KeyboardAvoidingView style={styles.form}>

                <InputItem
                    icon = {
                        <MaterialCommunityIcons name="account" size={32} />
                    }
                    onChangeText= {(orderName) => this.setState ({ orderName }) }
                    placeholder = "Full Name" />

                <InputItem
                    icon = {
                        <MaterialCommunityIcons name="car" size={32} />
                    }
                    onChangeText= {(orderAddress) => this.setState ({ orderAddress }) }
                    placeholder = "Your Address" />
                <InputItem
                    icon = {
                        <MaterialCommunityIcons name="email" size={32} />
                    }
                    onChangeText= {(orderKind) => this.setState ({ orderKind }) }
                    placeholder = "Your Order" />

                <Button
                    type="primary"
                    onPress={() => this.addOrder()}
                >
                    Order
                </Button>

            </KeyboardAvoidingView>
        )
    }
}
