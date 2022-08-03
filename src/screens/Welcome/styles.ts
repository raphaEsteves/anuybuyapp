import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: ${( { theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    margin-top: ${RFValue(75)}px;
    align-items: center;
    justify-content: center;
`;

export const HeaderText = styled.View``;

export const Text1 = styled.Text`
    color: ${( { theme }) => theme.colors.background};
    font-family: ${( { theme }) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
`;

export const ColoredTitle = styled.Text`
    color: #FF9701;
`;

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
`;

export const WrapperText = styled.Text`
padding: 5px 5px;
color: ${( { theme }) => theme.colors.background};
font-family: ${( { theme }) => theme.fonts.bold};
font-size: ${RFValue(24)}px;
text-align: center;
`;

export const Footer = styled.View`
    bottom: -25px;
    background-color: ${( { theme }) => theme.colors.secondary};
    width: 100%;
    height: ${RFValue(150)}px;
    border-radius: 25px;
    padding-top: 25px;
`;

export const FooterText = styled.View`
    align-items: center;
    justify-content: center;
`;

export const GetStarted = styled(TouchableOpacity)`
    background-color: ${( {theme}) => theme.colors.background};
    width: 80%;
    border-radius: 25px;
    padding: 15px;
    justify-content: center;
    align-items: center;
`;

export const Text2 = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FF9701;
    font-family: ${( { theme }) => theme.fonts.bold};
`;

export const Line = styled.View`
    margin-top: 35px;
    background-color: ${( {theme}) => theme.colors.background};
    width: 40%;
    height: 2px;
    border-radius: 15px;
    align-self: center;
`;