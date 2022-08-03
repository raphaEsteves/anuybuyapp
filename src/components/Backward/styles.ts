import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    top: 30px;
    left: 5px;
    align-self: flex-start;
`;
export const Touch = styled(TouchableOpacity)`
    border-color: ${( { theme }) => theme.colors.shape_light2};
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 100px;
    border-width: 1px;
    align-items: center;
    justify-content: center;
    
`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;