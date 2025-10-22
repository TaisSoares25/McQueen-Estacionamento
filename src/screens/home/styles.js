import styled from "styled-components/native";

export const HomeContainer = styled.View`
flex:1;
background-color: #001A54;
display: flex;
justify-content: center;
align-items: center;
/* padding: 20px; */
`
export const Header = styled.Text`
justify-content: center;
color: #fff;
font-weight: bold;
font-size: 42px;
align-items: center;
margin-bottom:150px;
`

export const Cards = styled.View`
background-color: #555d71ff;
height:83px; 
width: 330px;  
align-items:flex-start;
border-radius: 8px;
margin-bottom:20px;
padding:10px; 
/* margin: 20px; */
margin-bottom: 50px;
justify-content: center;
`
export const Text= styled.Text`
font-weight: bold;
font-size: 14px;
color: #000;
margin-bottom:4px;
`
// export const Info  = styled.Text`
// font-weight: bold;
// font-size: 13px;
// color: #000;
// margin-bottom: 4px;
// `
export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px ;
`

export const ButtonText = styled.Text`
  color: #001a54;
  font-weight: bold;
  font-size: 16px;
  `