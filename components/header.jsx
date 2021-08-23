import React from "react";
import { View, Text } from "react-native";
import { generalTxt, styles_ } from "../styles/styles";

const Header = ({ colorHeader, colorBody, headerTxt }) => {
  return (
    <View style={styles_(colorHeader, colorBody).rect}>
      <Text style={styles_().permanezcaEnCasa}> {headerTxt} </Text>
    </View>
  );
};

export default Header;
// #208020
// rgba(164,39,39,1)
// rgba(193,118,118,1)"
