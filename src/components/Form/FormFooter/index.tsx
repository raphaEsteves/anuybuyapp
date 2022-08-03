import React from "react";
import { TouchableOpacityProps } from "react-native";


import {
    Container,
    FormFooterTitle,
    FooterRegister,
    ColoredText
} from "./styles";

interface Props extends TouchableOpacityProps{
    coloredText: string;
    title: string;
}

export function FormFooter( {title, coloredText, ...rest} : Props) {
    return (
        <Container >
            <FormFooterTitle>{title} </FormFooterTitle>
            <FooterRegister { ...rest }>
                <ColoredText>{coloredText}</ColoredText>
            </FooterRegister>
        </Container>
    );
}