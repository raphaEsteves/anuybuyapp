import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    border: 1px solid;
    border-color: ${({theme})=> theme.colors.shape_light2};
    flex-direction: row;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 28px;
    padding: 10px 0px; 
    width: 100%;
`;
export const WrapperImage = styled.View`
    background-color: transparent;
    width: ${RFValue(25)}px;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    margin-left: 25px;
`;

export const WrapperText = styled.View`
    justify-content: center;
    left: -${RFValue(30)}px;
    align-items: center;
    width:  100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${( { theme }) => theme.fonts.bold};
    color: ${({theme})=> theme.colors.shape_dark}; 
`;
