import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@ant-design/react-native";
import styles from "./styles";
import InputItem from "../../../components/InputItem";
import firebase from "../../../Firebase";
const rootRef = firebase.database().ref();
const orderRef = rootRef.child("orders");
export default class OrderCreare extends Component {
    constructor(props) {
        super(props);
        this.addOrder = () => {
            if ((this.state.orderName.trim() === "") ||
                (this.state.orderAddress.trim() === "") ||
                (this.state.orderKind.trim() === "")) {
                alert("Column Cant Empty");
            }
            else {
                orderRef.push({
                    orderName: this.state.orderName,
                    orderAddress: this.state.orderAddress,
                    orderKind: this.state.orderKind,
                });
                this.goto("Order");
            }
        };
        this.state = ({
            orderName: "",
            orderAddress: "",
            orderKind: "",
            orders: [],
        });
    }
    componentDidMount() {
        orderRef.on("value", (childSnapShot) => {
            const orders = [];
            childSnapShot.forEach((doc) => {
                orders.push({
                    key: doc.key,
                    orderName: doc.toJSON().orderName,
                    orderAddress: doc.toJSON().orderAddress,
                    orderKind: doc.toJSON().orderKind,
                });
                this.setState({
                    orders: orders.sort((a, b) => {
                        return (a.orderName < b.orderName);
                    }),
                });
            });
        });
    }
    goto(page) {
        this.props.navigation.navigate(page);
    }
    render() {
        return (React.createElement(KeyboardAvoidingView, { style: styles.form },
            React.createElement(InputItem, { icon: React.createElement(MaterialCommunityIcons, { name: "account", size: 32 }), onChangeText: (orderName) => this.setState({ orderName }), placeholder: "Full Name" }),
            React.createElement(InputItem, { icon: React.createElement(MaterialCommunityIcons, { name: "car", size: 32 }), onChangeText: (orderAddress) => this.setState({ orderAddress }), placeholder: "Your Address" }),
            React.createElement(InputItem, { icon: React.createElement(MaterialCommunityIcons, { name: "email", size: 32 }), onChangeText: (orderKind) => this.setState({ orderKind }), placeholder: "Your Order" }),
            React.createElement(Button, { type: "primary", onPress: () => this.addOrder() }, "Order")));
    }
}
OrderCreare.navigationOptions = {
    title: "Make Your Order",
};
//# sourceMappingURL=index.js.map