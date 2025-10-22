

// import Cadastro from "./src/screens/cadastro";
import Home from "./src/screens/home";
import Login from "./src/screens/login"

// import TelaLogin from "./src/screens/teste";
import Registro from "./src/screens/registro";
// import TelaRegistrarSaida from "./src/screens/saida";
import Cadastro from "./src/screens/cadastro";
import Saida from "./src/screens/saida";
import Cep from "./src/screens/cep";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from "styled-components/native";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Login,
    Veiculos: Home,
    Cadastro: Cadastro,
    Registrar: Registro,
    Saida: Saida,
  }
})

const Navigation = createStaticNavigation(RootStack)

const ContainerAPP = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerAPP>
        <Navigation/>
    </ContainerAPP>
  );
}