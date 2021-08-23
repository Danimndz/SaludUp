import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { QuestionarioStyles } from "../styles/styles";
import Icon from "react-native-vector-icons/Entypo";
import Opcion from "../components/opcion";

const Cuestionario = ({ nextView, nombre, pregunta, opciones },navigation) => {
  const [nameP, setName] = useState("");
  const [values, setValues] = useState(null);

  const functionToPass = (obj) => setValues(() => obj);

  const goNextView = () => {
    if (nombre) {
      if (nameP === "") {
        alert("Debe introducir su nombre");
      } else {
        navigation.navigate(nextView);
      }
    } else {
      navigation.navigate(nextView);
    }
  };
  return (
    <View style={QuestionarioStyles.container}>
      <View style={QuestionarioStyles.nombreRow}>
        <Text style={QuestionarioStyles.nombre}>Nombre:</Text>
        <TextInput
          placeholder="Nombre"
          onChangeText={(text) => setName(text)}
          value={nameP}
          style={QuestionarioStyles.nombreInput}
        ></TextInput>
      </View>
      <Text style={QuestionarioStyles.pregunta1}>{pregunta}</Text>
      {opciones.map((pregunta, idx) => (
        <Opcion
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
        onPress={goNextView}
      >
        <Icon name="chevron-thin-right" style={QuestionarioStyles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default Cuestionario;

// https://www.npmjs.com/package/react-native-vector-icons
