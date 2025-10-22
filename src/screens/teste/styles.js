// TelaLogin/styles.js
import styled from "styled-components/native";

export const Fundo = styled.ImageBackground`
  flex: 1;
  background-color: #3C0404;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 310px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 80px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  align-self: flex-start;
  margin-left: 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 15px;
  padding-left: 10px;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background-color: #d62828;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffea00;
`;

export const CarImage = styled.Image`
  width: 100px;
  height: 70px;
  margin-top: 20px;
  align-self: flex-end;
`;
