import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 10px 0;
`;

export const FormFooterTitle = styled.Text`
    color: ${({theme}) => theme.colors.shape_dark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`;

export const FooterRegister = styled(TouchableOpacity)`  
`;

export const ColoredText = styled.Text`
    font-size: ${RFValue(12)}px;
    color: #FF9701;
`;