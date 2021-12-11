import React from "react";
import {
    useFonts,
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";

const AppBootstrap: React.FC = ({ children }) => {
    const [fontLoaded] = useFonts({ DeliusUnicase_400Regular, DeliusUnicase_700Bold });
    return fontLoaded ? <>{children}</> : <AppLoading />;
};

export default AppBootstrap;
