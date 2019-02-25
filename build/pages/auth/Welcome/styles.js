import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: "#6080f9",
        fontSize: 36,
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        color: "#545454",
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
    },
});
export default styles;
//# sourceMappingURL=styles.js.map