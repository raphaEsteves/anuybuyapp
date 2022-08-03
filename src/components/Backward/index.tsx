import React from "react";
import { TouchableOpacityProps } from "react-native";
import{ Touch, Icon } from "./styles";

interface Props extends TouchableOpacityProps{
    content: string;
}

export function Backward( {content,  ...rest} : Props){
    return(
        <Touch  { ...rest } >
            <Icon name= { content }/>
        </Touch>
    )
}