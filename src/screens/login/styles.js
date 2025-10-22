import styled from "styled-components/native";

export const LoginContainer = styled.View`
  flex: 1;
  background-color: #001A54;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top:10px;
`;

export const Card = styled.View`
  width: 300px;
  height: 450px;
  background-color: #111136ff;
  border-radius: 10px;
  align-items: center;
  padding: 5px;
  margin-top:10px;
`;

export const Image = styled.Image`
padding: 5px;
margin-top: 20px;
`
export const FormInput = styled.TextInput`
  width: 250px;
  height: 49px;
  background-color: #d9d9d9;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  margin-top:30px;
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 49px;
  background-color: #2bd437ff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;