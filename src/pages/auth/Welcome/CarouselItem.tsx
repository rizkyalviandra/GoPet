import { WhiteSpace } from "@ant-design/react-native"
import React, { Component } from "react"
import {
    Image,
    ImageSourcePropType,
    Text,
    View,
} from "react-native"

import styles from "./styles"

interface IProps {
    title: string
    description: string
    imageSource: ImageSourcePropType
}

export default class CarouselItem extends Component<IProps> {
    public render() {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.imageSource}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <WhiteSpace />
                    <WhiteSpace />
                    {this.props.children}
                </View>
            </View>
        )
    }
}
