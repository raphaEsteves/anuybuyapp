import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${( { theme }) => theme.colors.primary};
    align-items: center;
    padding: 15px 0px; 
    border-radius: 28px;
    margin-bottom: 10px;    
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${( { theme }) => theme.fonts.bold};
    color: ${( { theme }) => theme.colors.background};
`;
