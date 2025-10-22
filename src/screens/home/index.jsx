

import {  Text } from "react-native";
import { HomeContainer, Cards, Header, Label, Info,Button, ButtonText} from "./styles";
import {useNavigation} from "@react-navigation/native";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios";

import {  useEffect, useState} from "react";




export default function Home() {
    const navigation = useNavigation()

  const [data, setData] = useState([]);
   function buscarVeiculos() {
    axios
      .get("https://parkingapisenai.azurewebsites.net/api/veiculos")
      .then((res) => {
        console.log("🚗 Dados recebidos da API:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("❌ Erro ao buscar veículos:", err.message);
      });
  }

  useEffect(() => {
    buscarVeiculos();
  }, []);

  return (
    <HomeContainer>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 20 }}
      >
      <Header>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Veículos ativos</Text>
      </Header>

      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <Cards key={index}>
            <Text>Placa: {item.placa}</Text>
            <Text>Data entrada: {item.dataEntrada}</Text>
            <Text>Hora entrada: {item.horarioEntrada}</Text>
          </Cards>
        ))
      ) : (
        <Text>Nenhum veículo encontrado</Text>
      )}

      <Button onPress={() => navigation.navigate("Cadastro")}>
        <ButtonText>Ir para Cadastro</ButtonText>
      </Button>
      </ScrollView>
       </KeyboardAvoidingView>
        </HomeContainer>
    );
}