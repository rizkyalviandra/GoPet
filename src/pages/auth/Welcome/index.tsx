import { Button, Carousel } from "@ant-design/react-native"
import React, { Component } from "react"
import { View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import CarouselItem from "./CarouselItem"

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export default class Welcome extends Component<IProps> {
    public gotoLoginUser() {
        this.props.navigation.navigate("LoginUser")
    }

    public render() {
        return(
            <View>
                <Carousel>
                    <CarouselItem
                        imageSource={require("../../../../assets/welcome-image-1.png")}
                        title="Go-Pet"
                        description="Make your pet clean and healthy without come to pet shop"
                    />
                    <CarouselItem
                        imageSource={require("../../../../assets/welcome-image-1.png")}
                        title="Go-Pet"
                        description="Make your pet clean and healthy without come to pet shop"
                    >
                        <Button type="ghost" onPress={() => this.gotoLoginUser()}>
                        Continue
                        </Button>
                    </CarouselItem>
                </Carousel>
            </View>

        )
    }
}
