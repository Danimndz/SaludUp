import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { QuestionarioStyles } from "../styles/styles";
import Icon from "react-native-vector-icons/Entypo";
import Opcion from "../components/opcion";
import { useDispatch } from "react-redux";
import { setAnswer, setName_ } from "../redux/actions";

const Cuestionario = ({ nextView, pregunta, opciones, navigation }) => {
  const [nameP, setName] = useState("");
  const [values, setValues] = useState(null);
  const functionToPass = (obj) => setValues(() => obj);
  const dispatch = useDispatch();

  const goSecondView = () => {
    if (nameP === "") {
      alert("Debe introducir su nombre");
    } else {
      dispatch(setName_(nameP));
      dispatch(setAnswer(values));
      navigation.navigate(nextView);
    }
  };

  const goNextView = () => {
    dispatch(setAnswer(values));
    navigation.navigate(nextView);
  };
  return (
    <View style={QuestionarioStyles.container}>
      <View style={QuestionarioStyles.nombreRow}>
        {nextView == "Second" ? (
          <Text style={QuestionarioStyles.nombre}>Nombre:</Text>
        ) : null}
        {nextView == "Second" ? (
          <TextInput
            placeholder="Nombre"
            onChangeText={(name) => setName(name)}
            value={nameP}
            style={QuestionarioStyles.nombreInput}
          ></TextInput>
        ) : null}
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
          dis={values ? true : false}
        />
      ))}
      <TouchableOpacity
        disabled={
          values === null ? true : values.value === false ? true : false
        }
        style={QuestionarioStyles.button}
        onPress={nextView === "Second" ? goSecondView : goNextView}
      >
        <Icon name="chevron-thin-right" style={QuestionarioStyles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default Cuestionario;
