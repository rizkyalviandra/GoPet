import { StyleSheet } from "react-native";
import constant from "../../../config/Constants";
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        flex: 1,
    },
    logo: {
        alignSelf: "center",
        width: constant.DEVICE_WIDTH - 40,
        height: 200 * ((constant.DEVICE_WIDTH - 40) / 499),
    },
    heading: {
        alignSelf: "center",
        fontSize: 24,
        marginVertical: 10,
    },
    form: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
});
export default styles;
//# sourceMappingURL=styles.js.map