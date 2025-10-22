import React, { useState } from "react";
import styled from "styled-components/native";
import { Container, Section, Label, FormInput, Button, ButtonText } from "./styles";
import axios from "axios";

export default function Registro() {
  const [placaEntrada, setPlacaEntrada] = useState("");
  const [placaSaida, setPlacaSaida] = useState("");

  async function registrarEntrada() {
    if (!placaEntrada) {
      alert("Digite a placa do veículo para registrar a entrada!");
      return;
    }

    try {
      const response = await axios.post(
        "https://parkingapisenai.azurewebsites.net/api/veiculos/entrada",
        { placa: placaEntrada }
      );

      console.log("Entrada registrada:", response.data);
      alert("Entrada registrada com sucesso!");
      setPlacaEntrada("");
    } catch (error) {
      console.error("Erro ao registrar entrada:", error);
      alert("Erro ao registrar entrada. Verifique a placa.");
    }
  }

  async function registrarSaida() {
    if (!placaSaida) {
      alert("Digite a placa do veículo para registrar a saída!");
      return;
    }

    try {
      const response = await axios.put(
        "https://parkingapisenai.azurewebsites.net/api/veiculos/saida",
        { placa: placaSaida }
      );

      console.log("Saída registrada:", response.data);
      alert("Saída registrada com sucesso!");
      setPlacaSaida("");
    } catch (error) {
      console.error("Erro ao registrar saída:", error);
      console.log(placa)
      alert("Erro ao registrar saída. Verifique a placa.");
    }
  }

  return (
    <Container>
      {/* ENTRADA */}
      <Section>
        <Label>Registrar Entrada</Label>
        <FormInput
          placeholder="Digite a placa aqui"
          value={placaEntrada}
          onChangeText={setPlacaEntrada}
        />
        <Button onPress={registrarEntrada}>
          <ButtonText>Registrar Entrada</ButtonText>
        </Button>
      </Section>

      {/* SAÍDA */}
      <Section>
        <Label>Registrar Saída</Label>
        <FormInput
          placeholder="Digite a placa aqui"
          value={placaSaida}
          onChangeText={setPlacaSaida}
        />
        <Button onPress={registrarSaida}>
          <ButtonText>Registrar Saída</ButtonText>
        </Button>
      </Section>
    </Container>
  );
}
