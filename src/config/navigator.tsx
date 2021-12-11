import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Game } from "@screens";

export type StackNavigatorparams = {
    Home: undefined;
    Game: { gameId: string };
};

const Stack = createNativeStackNavigator<StackNavigatorparams>();
const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} initialParams={{ gameId: "1h757d" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
