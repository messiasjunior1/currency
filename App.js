import { Picker } from "@react-native-picker/picker";
import React, { Component, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BASE_URL = "https://api.exchangeratesapi.io/latest";
export default function App() {
  const [first, setFirst] = useState("BRL");
  const [second, setSecond] = useState("USD");
  const [rate, setRate] = useState([]);
  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=3391591367ec7118ded9`,
    })
      .then((response) => {
        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={first}
        onChange={(valor) => setFirst(valor)}
      />
      <Picker
        value={second}
        onValueChange={(svalor) => setSecond(svalor)}
        style={{height: 40, width: 200}}
     >
         <Picker.Item label="EUR" value="java" />
         <Picker.Item label="USD" value="js" />
      </Picker>
      <Button
        title="Converter"
        onClick={() => {
          getRate(first, second);
        }}
      ></Button>
      <Text>1 {first} = {rate[`${first}_${second}`]} {second}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#f0af4d",
    borderColor: "#f0aaaa",
    padding: 10,
  },
});
