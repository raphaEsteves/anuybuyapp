import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const Header = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    position: absolute;
`;
        
export const Logo = styled.View``;

export const Form = styled.View`
    background-color: ${( {theme}) => theme.colors.background};
    width: ${RFValue(300)}px;
    align-items: center;
    justify-content: space-between;
    bottom: 10px;
`;

export const Title = styled.Text`
    color: ${( { theme }) => theme.colors.title_off };
`;
