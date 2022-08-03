import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

//SVGs
import LogoSvg from "../../assets/logo.svg";

//Components
import { Backward } from "../../components/Backward";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { FormFooter } from "../../components/Form/FormFooter";

import {
    Container,
    Header,
    Logo,
    WrapperForm,
    FormHeader,
    FormHeaderTitle,
    FormHeaderSubtitle,
    Form,
    Box,
    Title
} from "./styles";


export function SignUp() {
    return (
        <Container>
            <Header>
                <Backward content="arrow-left" />
                <Logo>
                    <LogoSvg width={RFValue(80)} />
                </Logo>
            </Header>
            <WrapperForm>
                <FormHeader>
                    <FormHeaderTitle>CADASTRE-SE</FormHeaderTitle>
                    <FormHeaderSubtitle>Preencha os campos a seguir</FormHeaderSubtitle>
                </FormHeader>

                <Form>
                    <Box>
                        <Title>E-mail</Title>
                        <Input />
                    </Box>
                    <Box>
                        <Title>Senha</Title>
                        <Input />
                    </Box>
                    <Box>
                        <Title>Telefone</Title>
                        <Input />
                    </Box>
                    <Button content="INSCREVA-SE" />
                </Form>
                <FormFooter text="Já possui uma conta?" coloredText="REGISTRE-SE" />
            </WrapperForm>
        </Container>
    );
}