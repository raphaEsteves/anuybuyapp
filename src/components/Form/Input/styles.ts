import { TextInput } from "react-native";
import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled(TextInput)`
    width: 100%;
    background-color: ${( {theme }) => theme.colors.shape_light};
    font-family: ${( {theme }) => theme.fonts.regular};
    font-size: ${ RFValue(14)}px;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 15px 10px;
`;


