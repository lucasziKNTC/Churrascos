import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';




export default function App() {

  const [Homem, setHomem] = useState(0)
  const [Mulher, setMulher] = useState(0)
  const [Crianca, setCrianca] = useState(0)



  const [TotalComidaMulher, setTotalComidaMulher] = useState(0)
  const [TotalComidaHomem, setTotalComidaHomem] = useState(0)
  const [TotalComidaCrianca, setTotalComidaCrianca] = useState(0)
  const [ResultadoTotalCarne, setResultadoTotalCarne] = useState(0)
  const [TotalCarvao, setTotalCarvao] = useState(0)


  function CalcularChurrasco() {
    const carnePadrao = 0.400
    const Carvao = 5
    const CarneHomem = Homem * carnePadrao
    const CarneMulher = (carnePadrao - (carnePadrao * 0.25)) * Mulher
    const CarneCrianca = (carnePadrao / 2) * Crianca
    const TotalCarne = CarneHomem + CarneMulher + CarneCrianca
    const TotalCarvao = (TotalCarne * Carvao) / 6

    if (Mulher !== 0 || Homem !== 0 || Crianca !== 0) {
      setTotalComidaCrianca(CarneCrianca.toFixed(1))
      setTotalComidaMulher(CarneMulher.toFixed(1))
      setTotalComidaHomem(CarneHomem.toFixed(1))
      setResultadoTotalCarne(TotalCarne.toFixed(1))
      setTotalCarvao(TotalCarvao.toFixed(1))
    } else {
      alert("Infome a quantididade certa.")
    }
  }




  return (
    <View style={styles.container}>

      <Text>Calcular Churrasco</Text>

      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        placeholder='Digite a quantidade de Homens'
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setHomem}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a quantidade de mulheres'
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setMulher}
      />


      <TextInput
        style={styles.input}
        placeholder='Digite a quantidade de criancas'
        placeholderTextColor="#999"
        keyboardType="numeric"
        onChangeText={setCrianca}
      />



      <TouchableOpacity
        activeOpacity={.7}
        style={styles.button}
        onPress={CalcularChurrasco}
      >
        <Text style={styles.text}>Calcular</Text>


      </TouchableOpacity>

      <Text>Carne para mulheres {TotalComidaMulher} Kg</Text>
      <Text>Carne para homens{TotalComidaHomem} Kg</Text>
      <Text>Carne para criancas {TotalComidaCrianca} Kg</Text>
      <Text>Total carne churrasco {ResultadoTotalCarne}Kg</Text>
      <Text>Total carvao churrasco{TotalCarvao}Kg</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  input: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: 'white',

  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 6,
    marginTop: 30,

  },
  text:
  {
    textAlign: 'center',
    color: '#fff',
  }
});



