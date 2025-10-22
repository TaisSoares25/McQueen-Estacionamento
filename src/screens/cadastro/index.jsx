
import styled from "styled-components/native";
import { CadastroContainer, Card, FormInput, Title, Button, ButtonTexto } from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios  from "axios";
import { useState} from "react";
const Label = styled.Text`
  color: #a3a0a0;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 0;
  align-self: flex-start;
`;

export default function Cadastro() {
  const navigation = useNavigation()

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

 
  async function handleCadastro() {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post(
         "https://parkingapisenai.azurewebsites.net/auth/register",
         {
          nome: nome,
          email: email,
          senha: senha,
        }
      );

      console.log("Usuário cadastrado:", response.data);
      alert(" Cadastro realizado com sucesso!");
      navigation.navigate("Registrar"); 
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert(" Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  }
  
  return (
    <CadastroContainer>
      <Card>
        <Title>Cadastrar</Title>
      

        <Label>Nome:</Label>
        <FormInput
          placeholder="Digite seu nome"
          keyboardType="default"
          value={nome}
          onChangeText={setNome}
        />

        <Label>Email:</Label>
        <FormInput
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Label>Senha:</Label>
        <FormInput
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
         <Button onPress={handleCadastro}>
          <ButtonTexto>Cadastrar</ButtonTexto>
        </Button>
        </Card>    
    </CadastroContainer>
  );
}
