import React from "react";
import { TouchableOpacity } from "react-native";

import {
    Container,
    Title
} from "./styles";

interface Props extends TouchableOpacity{
    title: string;
}

export function FormButton( { content, ...rest }){
    return(
        <Container { ...rest }>
            <Title>{ content } </Title>
        </Container>
    )
}