import styled from "styled-components/native";
import { Image} from "react-native";
import { LoginContainer, Card, FormInput, Button, ButtonText, Title } from "./styles"
import { useNavigation } from "@react-navigation/native";
import { axios } from "axios";
import { useState} from 'react';


const Label = styled.Text`
font-size: 30px;
 color:#a3a0a0;
 font-weight: bold;
 font-size: 25px;
 padding: 10px;
 align-self: self-start;
`


export default function Login() {
    const navigation = useNavigation()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  
  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post(
            "https://parkingapisenai.azurewebsites.net/auth/login",
        {
          email: email,
          senha: senha,
        }
      );

      console.log("Resposta da API:", response.data);

      if (response.status === 200) {
        Alert.alert("Sucesso", "Login realizado!");
        navigation.navigate("Veiculos"); // navega pra próxima tela
      }
    } catch (error) {
      console.error("Erro no login:", error);
      Alert.alert("Erro", "Falha ao fazer login. Verifique seus dados.");
    }
  }


    return (
        <LoginContainer>
            <Image source={require("../../assets/img/Mc.png")} /> 
            <Card>
               <Title>Login</Title>

                <Label>
                    Email:
                </Label>
                <FormInput label="Email:" keyboardType="Email" />
                <Label>
                    Senha:
                </Label>
                <FormInput label="Senha:" secureTextEntry />

                <Button onPress={() => navigation.navigate("Veiculos")}>
                <ButtonText>Entrar</ButtonText>
                </Button>

            </Card>



        </LoginContainer>

    );
}