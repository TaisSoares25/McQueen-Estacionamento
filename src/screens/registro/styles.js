import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #001a54; 
  padding: 20px;
`;

export const Section = styled.View`
  margin-bottom: 50px;
  align-items: center;
  padding: 10%;
`;

export const Label = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 18px;

`;

export const FormInput = styled.TextInput`
  width: 100%;
  height: 45px;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  background-color: #009933; /* verde */
  border-radius: 8px;
  justify-content: center;
  align-items:center;
  
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
 
`;
