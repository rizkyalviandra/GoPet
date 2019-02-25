import React, { Component } from "react"
import { FlatList, Text } from "react-native"
import { NavigationScreenProp } from "react-navigation"

import styles from "./styles"
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

export default class Order extends Component<IProps> {
    
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
        orderRef.on("value", (childSnapshot) => {
            const orders = []
            childSnapshot.forEach((doc) => {
                
            })
        })
    }
    
    public render() {
        return(
            <FlatList
                data={this.state.orders}
                renderItem={({ item, index }) => {
                    return(
                        <Text style={styles.text}>
                            {item.orderName}
                        </Text>
                    )
                }}
            >
            </FlatList>
        )
    }
}
