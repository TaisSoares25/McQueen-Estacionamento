import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { axios } from "axios";

export default function Cep(){
  const [cep,setCep] = useState('')
  const [data,setData] = useState(null)

  function buscarCep(){
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err)=> {
      console.log("Erro:", err)
    })

  }
  return(
    <View>
      <TextInput
        placeholder = "Digite seu cep"
        keyboardType = "numeric"
        onChangeText={setCep}
        value={cep}
      />
      <TouchableOpacity onPress={buscarCep}>
        <Text>Buscar CEP</Text>
        </TouchableOpacity>
          {
            data && <Text>{data.logradouro}</Text>
          }
    </View>
  )
}