import {View} from "react-native";
import Header from "./Header";

const Layout = ({title, children}) => (
    <View>
        <Header title={title}/>
        {children}
    </View>
);

export default Layout;
