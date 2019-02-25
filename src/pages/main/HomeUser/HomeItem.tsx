import React, {Component} from "react"
import { View, Text, Image, TouchableOpacity} from "react-native"
import {NavigationScreenProp} from "react-navigation"

import styles from "./styles"

interface IProps {
  navigation: NavigationScreenProp<any, any>
}

export default class HomeItem extends Component<IProps> {
  public goto(page: string) {
    this.props.navigation.navigate(page)
  }

  public render() {
    return(
      <View>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => this.goto("OrderCreate") }>
          <View style={styles.imageContainerItem}>
            <Image
              source={require("../../../../assets/mandi.jpeg")}
              resizeMode={"cover"}
              style={styles.imageItem}
            />
          </View>
          <View style={{ marginTop: 140 }}>
            <Text style={{ fontSize: 18, color: "white" }}>
              Cleanly Pet
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5, color: "white" }}>
              cleanning
            </Text>
            <Text style={{ marginTop: 20, textAlign: "justify", fontSize: 13 }}>
              package for your hygiene pet
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => this.goto("OrderCreate") }>
          <View style={styles.imageContainerItem}>
            <Image
              source={require("../../../../assets/checkup.jpeg")}
              resizeMode={"cover"}
              style={styles.imageItem}
            />
          </View>
          <View style={{ marginTop: 140 }}>
            <Text style={{ fontSize: 18, color: "white" }}>
              Healthy Pet
            </Text>
            <Text style={{ fontSize: 12, marginTop: 5, color: "white" }}>
              Healthy
            </Text>
            <Text style={{ marginTop: 20, textAlign: "justify", fontSize: 13 }}>
              Package For your health pet
            </Text>
          </View>
        </TouchableOpacity>

    </View>
    )
  }
}
