import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./home.styles";

import { StackNavigatorparams } from "@config/navigator";

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorparams, "Home">;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Aj</Text>
            <Button
                title="Game"
                onPress={() =>
                    navigation.navigate("Game", {
                        gameId: "5T7903GQ"
                    })
                }
            />
        </View>
    );
};

export default Home;
