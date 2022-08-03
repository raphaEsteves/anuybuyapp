import React from "react";


import {
    Container,
    FormFooterTitle,
    FooterRegister,
    ColoredText
} from "./styles";

interface Props extends Text{
    text: string;
    coloredText: string;
}

export function FormFooter( {text, coloredText}) {
    return (
        <Container>
            <FormFooterTitle>{text} </FormFooterTitle>
            <FooterRegister>
                <ColoredText>{coloredText}</ColoredText>
            </FooterRegister>
        </Container>
    );
}