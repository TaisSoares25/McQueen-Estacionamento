import styled from "styled-components/native";

export const CadastroContainer = styled.View`
  flex: 1;
  background-color: #001A54;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Card = styled.View`
  width: 310px;
  height: 700px;
  background-color: 122181237;
  border-radius: 8px;
  padding: 35px;
  margin-top:25px;
  align-items:self-start;
  margin:19px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormInput = styled.TextInput`
  width: 250px;
  height: 55px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  font-size: 12px;
  margin-bottom: 15px;
  color: black;
`;
export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 55px;
  background-color: #00ff40;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 87px;
`;

export const ButtonTexto = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: bold;
`;