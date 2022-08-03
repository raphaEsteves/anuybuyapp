import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import {
    Container,
    Logo,
    Header,
    Form,
    Title
} from "./styles";

//SVG
import LogoSvg from "../../assets/logo.svg";
import SignInSvg from "../../assets/SignIn.svg";

//Components
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Backward } from "../../components/Backward";
import { SignInSocialGoogle } from "../../components/SignInSocialGoogle";
import { FormFooter } from "../../components/Form/FormFooter";

export function SignIn(){
    return(
        
        <Container>
            <Header>
                <Backward content='arrow-left'/>
                <Logo><LogoSvg width={RFValue(80)} /></Logo>
                <SignInSvg width={RFValue(250)} />
            </Header>

            <Form>
                <Input autoCorrect={false} placeholder="E-mail" style={{marginBottom: 10}}/>
                <Input autoCorrect={false} placeholder="Senha" secureTextEntry={true} style={{marginBottom: 10}}/>
                <Title style={{alignSelf: "flex-end", marginBottom: 25}}>Esqueceu sua senha?</Title>
                <Button content='CONECTAR'/>
                <Title>OU</Title>
                <SignInSocialGoogle content='Conectar com o Google'/>

                <FormFooter text="Não possui conta?" coloredText="REGISTRE-SE" />
            </Form>

        </Container>    
    )
}