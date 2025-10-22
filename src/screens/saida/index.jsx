
import styled from "styled-components/native";
import {Container, Section, Label, FormInput, Button, ButtonText} from "./styles"
import  axios  from "axios";

  export default function Saida() {
  const [placaSaida, setPlacaSaida] = useState("");

   async function registrarSaida() {
    if (!placaSaida) {
      alert("Digite a placa do veículo para registrar a saída!");
      return;
    }

    try {
      const response = await axios.post(
        "https://parkingapisenai.azurewebsites.net/api/veiculos",
        { placa: placaSaida }
      );

      console.log("Saída registrada:", response.data);
      alert(" Saída registrada com sucesso!");
      setPlacaSaida("");
    } catch (error) {
      console.error("Erro ao registrar saída:", error);
      alert(" Erro ao registrar saída. Verifique a placa.");
    }
  }


return (
    <Container>
        <Label>Registrar Entrada</Label>
        <FormInput placeholder="Digite a placa aqui" />
        <Button>
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Container>
);
  }