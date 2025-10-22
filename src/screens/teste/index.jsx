

import {  Text } from "react-native";
import { HomeContainer, Cards, Header, Label, Info,Button, ButtonText} from "./styles";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";

import {  useEffect, useState} from "react";




export default function Home() {
    const navigation = useNavigation()

  const [data, setData] = useState([]);
  //  function buscarVeiculos() {
  //   axios.get("https://parkingapisenai.azurewebsites.net/api/veiculos")
  //     .then((res) => {
  //       setData(res.data);
  //       console.log("Resposta da API:", res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Erro ao buscar veículos:", err);
  //     });
  // } 

  function buscarVeiculos() {
  axios
    .get("https://parkingapisenai.azurewebsites.net/api/veiculos")
    .then((res) => {
      console.log("🚗 Dados recebidos da API:");
      console.log(res.data); // 👈 veja no console Metro/Expo
      setData(res.data);
    })
    .catch((err) => {
      console.log("❌ Erro na requisição:");
      console.log(err.message);
    });
}


  useEffect(() => {
    buscarVeiculos();
  }, []);

    return (
        <HomeContainer>
            {/* <Image source={require("../../assets/img/car.png")}/> */}
            <Header>
                
                <Text>Veículos ativos</Text>
            </Header>
            
            {/* <Cards key={index}>
                <Label>Placa:<Info>{buscarVeiculos.index}</Info></Label> 
                <Label>Data entrada::<Info>{buscarVeiculos.dataEntrada}</Info></Label>
                <Label>Hora entrada::<Info>{buscarVeiculos.horaEntrada}</Info></Label>  
            </Cards> */}

            <Cards>
                <Label>Placa:</Label>
                <Label>Data entrada:</Label>
                <Label>Hora entrada:</Label>
            </Cards>

            <Cards>
                <Label>Placa:</Label>
                <Label>Data entrada:</Label>
                <Label>Hora entrada:</Label>
            </Cards>
              ))
      ) : (
        <Text>Nenhum veículo encontrado</Text>
      )
              <Button onPress={() => navigation.navigate("Cadastro")}>
          <ButtonText>Ir para Cadastro</ButtonText>
        </Button>

       {
            data && <Text>{data.logradouro}</Text>
          } 
        </HomeContainer>
    );
}




//Cadastro//

import React, { useState } from "react";
import styled from "styled-components/native";
import { 
  CadastroContainer, 
  Card, 
  FormInput, 
  Title, 
  Button, 
  ButtonTexto 
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Label = styled.Text`
  color: #a3a0a0;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 0;
  align-self: flex-start;
`;

export default function Cadastro() {
  const navigation = useNavigation();

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
        "https://parkingapisenai.azurewebsites.net/api/veiculos", // ⚠️ Ajuste se for outra rota
        {
          nome: nome,
          email: email,
          senha: senha,
        }
      );

      console.log("Usuário cadastrado:", response.data);
      alert("Cadastro realizado com sucesso!");
      navigation.navigate("Registrar"); 
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
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
