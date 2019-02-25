import { StyleSheet } from "react-native"
import constants from "../../../config/Constants"

const styles = StyleSheet.create({
    containerItem: {
        width: constants.DEVICE_WIDTH * 0.95,
        alignSelf: "center",
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 5,
        shadowColor: "grey",
        backgroundColor: "white",
        minHeight: 250,
    },
    imageItem: {
        width: constants.DEVICE_WIDTH * 0.95,
        height: 200,
    },
    imageContainerItem: {
        position: "absolute",
        top: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: "hidden",
    },

    container: {
        flex: 1,
    },

    isPackageEmptyViewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default styles
