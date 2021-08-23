import React from "react";
import { View, Text } from "react-native";
import { setDate, setHour } from "../helpers";
import { styles_ } from "../styles/styles";

const Body = ({ nombre, colorHeader, colorBody, bodyTxt }) => {
  const date = setDate();
  const hour = setHour();
  return (
    <View style={styles_(colorHeader, colorBody).rect2}>
      <Text style={styles_().fecha271121}>Fecha: {date}</Text>
      <Text></Text>
      <Text style={styles_().hora1123}>Hora: {hour}</Text>
      <Text></Text>
      <Text style={styles_().loremIpsum2}>{nombre}</Text>
      <Text></Text>
      <Text style={styles_().loremIpsum}>{bodyTxt}</Text>
    </View>
  );
};

export default Body;
