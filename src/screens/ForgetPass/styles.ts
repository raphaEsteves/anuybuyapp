import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
`;

export const Logo = styled.View`
`;

export const FormWrapper = styled.View`
    top: 50px;
    width: 80%;
    height: ${RFValue(225)}px;
    justify-content: space-between;
`;

export const FormHeader = styled.View``;

export const FormHeaderTitle = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;
`;

export const FormHeaderSubtitle = styled.Text`
    color: ${({theme}) => theme.colors.shape_dark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`;

export const Form = styled.View`
    width: 100%;
`;   

export const FormFooter = styled.View`
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
`;

export const FormFooterTitle = styled.Text`
    color: ${({theme}) => theme.colors.shape_dark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(11)}px;
`;

export const FooterRegister = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(11)}px;
`;
