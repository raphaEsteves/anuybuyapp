import React from "react";
import { TouchableOpacity } from "react-native";

import{
    Container,
    Touch,
    Icon
} from "./styles";

interface Props extends TouchableOpacity{
    content: string;
}

export function Backward( { content }){
    return(
        <Container>
            <Touch>
                    <Icon name= { content }/>
            </Touch>
        </Container>
    )
}