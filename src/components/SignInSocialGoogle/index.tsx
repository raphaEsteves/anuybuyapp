import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

//SVGs
import GoogleSvg from "../../assets/google.svg";

import {
    Container,
    WrapperImage,
    WrapperText,
    Title
} from "./styles";

interface Props extends TouchableOpacity{
    content: string;
}

export function SignInSocialGoogle( { content }){
    return(
        <Container>
            <WrapperImage>
                <GoogleSvg width={ RFValue(25)} />
            </WrapperImage>
            <WrapperText>
                <Title>{ content }</Title>
            </WrapperText>
        </Container>
    )
}