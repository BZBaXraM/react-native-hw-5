import {StyleSheet, View} from 'react-native';
import MainPage from "./src/components/MainPage";
import Feed from "./src/components/Feed";
import Content from "./src/components/Content";
import LoginPage from "./src/components/LoginPage";
import SingUpPage from "./src/components/SingUpPage";
import InfoPage from "./src/components/InfoPage";
import Layout from "./src/components/Layout";

const App = () => {
    return (
        <View style={styles.container}>
            <Layout title="Sign Up">
                <SingUpPage/>
            </Layout>
            <Layout title="Info">
                <InfoPage/>
            </Layout>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#bfbfbf",
    },
});

export default App;