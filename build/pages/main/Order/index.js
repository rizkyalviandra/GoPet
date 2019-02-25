import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import styles from "./styles";
import firebase from "../../../Firebase";
const rootRef = firebase.database().ref();
const orderRef = rootRef.child("orders");
export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            orderName: "",
            orderAddress: "",
            orderKind: "",
            orders: [],
        });
    }
    componentDidMount() {
        orderRef.on("value", (childSnapshot) => {
            const orders = [];
            childSnapshot.forEach((doc) => {
            });
        });
    }
    render() {
        return (React.createElement(FlatList, { data: this.state.orders, renderItem: ({ item, index }) => {
                return (React.createElement(Text, { style: styles.text }, item.orderName));
            } }));
    }
}
//# sourceMappingURL=index.js.map