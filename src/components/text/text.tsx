import React, { ReactElement } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
    weight?: "400" | "700";
} & NativeTextProps;

const Text: React.FC<TextProps> = ({
    children,
    style = {},
    weight = "400",
    ...props
}): ReactElement => {
    let fontFamily = "";
    if (weight === "400") {
        fontFamily = "DeliusUnicase_400Regular";
    }

    if (weight === "700") {
        fontFamily = "DeliusUnicase_700Bold";
    }

    return (
        <NativeText {...props} style={[{ fontFamily }, style]}>
            {children}
        </NativeText>
    );
};

export default Text;
