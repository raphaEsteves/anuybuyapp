import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View``;

export const Logo = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: ${RFValue(20)}px;
`;

export const WrapperForm = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const FormHeader = styled.View`
    width: ${RFValue(300)}px;
`;

export const FormHeaderTitle = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(26)}px;
`;

export const FormHeaderSubtitle = styled.Text`
    color: ${({theme}) => theme.colors.shape_dark};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`;

export const Form = styled.View`
    margin-top: ${RFValue(20)}px;
    width: ${RFValue(300)}px;
    height: 60%;
    justify-content: space-between;
`;
export const Box = styled.View``;

export const Title = styled.Text`
    margin-top: 10px;
    color: ${( { theme }) => theme.colors.title_off };
`;