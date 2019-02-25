import { createStackNavigator } from "react-navigation";
import Welcome from "../../pages/auth/Welcome";
import LoginUser from "../../pages/auth/LoginUser";
import Register from "../../pages/auth/Register";
import HomeItem from "../../pages/main/HomeUser/HomeItem";
export default createStackNavigator({
    Welcome,
    LoginUser,
    Register,
    HomeItem,
}, {
    headerMode: "none",
});
//# sourceMappingURL=index.js.map