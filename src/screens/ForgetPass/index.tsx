import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

//SVGs
import LogoSvg from "../../assets/logo.svg";

//Components
import { Backward } from "../../components/Backward";
import { FormButton } from "../../components/Form/FormButton";
import { Input } from "../../components/Form/Input";
import { FormFooter } from "../../components/Form/FormFooter";
import { 
    Container,
    Header,
    Logo,
    FormWrapper,
    Form,
    FormHeader,
    FormHeaderTitle,
    FormHeaderSubtitle
} from "./styles";

export function ForgetPass({navigation}){
    return(
        <Container>
            <Header>
                <Backward content='arrow-left' onPress={() => navigation.goBack()} />
                <Logo><LogoSvg width={RFValue(80)} /></Logo>
            </Header>

            <FormWrapper>
                <FormHeader>
                    <FormHeaderTitle>ESQUECEU A SUA SENHA?</FormHeaderTitle>
                    <FormHeaderSubtitle>Digite seu e-mail ou número de telefone para verificar a redefinição de senha</FormHeaderSubtitle>
                </FormHeader>

                <Form>
                    <Input placeholder="E-mail ou telefone" />
                    <FormButton content="ENVIAR AGORA" />
                    <FormFooter text="Ainda com dificuldades?" coloredText="Fale com o suporte"/>
                </Form>

            </FormWrapper>
        </Container>
    );
}