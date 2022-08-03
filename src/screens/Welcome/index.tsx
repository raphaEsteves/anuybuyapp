import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

 //SVGs
import ImgSvg from "../../assets/img.svg";
import LogoSvg from "../../assets/logo.svg";

import { 
    Container,
    Header,
    HeaderText,
    Text1,
    ColoredTitle,
    Wrapper,
    WrapperText,
    Footer,
    FooterText,
    GetStarted,
    Text2,
    Line
 } from "./styles";

export function Welcome({navigation}){
    return(
        <Container>
            <Header>
                <LogoSvg width={RFValue(100)}/>
                
                <HeaderText>
                    <Text1>
                        Any
                        <ColoredTitle>Buy</ColoredTitle>
                    </Text1>
                </HeaderText>
            </Header>

            <Wrapper>
                <ImgSvg width={RFValue(250)} />
                <WrapperText>
                    Compre qualquer coisa 
                    <ColoredTitle> facilmente </ColoredTitle>
                    utilizando AR
                </WrapperText>
            </Wrapper>

            <Footer>
                <FooterText>
                    <GetStarted onPress={() => navigation.navigate('SignIn')}>
                        <Text2>Vamos lá!</Text2>
                    </GetStarted>
                </FooterText>
                <Line></Line>
            </Footer>
        </Container>
    );
}