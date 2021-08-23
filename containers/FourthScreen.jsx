import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { QuestionarioStyles } from "../styles/styles";
import Icon from "react-native-vector-icons/Entypo";
import Opcion from "../components/opcion";
import { useDispatch } from "react-redux";
import { setAnswer } from "../redux/actions";

const FourthScreen = ({ navigation }) => {
  const [values, setValues] = useState(null);
  const dispatch = useDispatch();

  const functionToPass = (obj) => setValues(() => obj);

  const nextView = () => {
    dispatch(setAnswer(values));
    navigation.navigate("Generador");
  };

  const opciones = ["si", "no"];
  return (
    <View style={QuestionarioStyles.container}>
      <View style={QuestionarioStyles.nombreRow}></View>
      <Text style={QuestionarioStyles.pregunta1}>
        Eres un contacto cercano de alguna persona que padece COVID-19
        confirmado?
      </Text>
      {opciones.map((pregunta, idx) => (
        <Opcion
          dis={values ? true : false}
          key={idx}
          id={idx + 1}
          viewStyle={QuestionarioStyles.p1op1Row}
          textStyle={QuestionarioStyles.p1op1}
          switchStyle={QuestionarioStyles.switch1}
          question={pregunta}
          functionPassed={functionToPass}
        />
      ))}
      <TouchableOpacity
        disabled={
          values === null ? true : values.value === false ? true : false
        }
        style={QuestionarioStyles.button}
        onPress={nextView}
      >
        <Icon name="chevron-thin-right" style={QuestionarioStyles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default FourthScreen;

// https://www.npmjs.com/package/react-native-vector-icons
