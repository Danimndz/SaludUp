import React from "react";
import Cuestionario from "../components/cuestionario";

const SecondScreen = ({ navigation }) => {
  const opciones = [
    "Dolor de garganta",
    "Fatiga",
    "Dolor de cabeza",
    "Dolor de cuerpo o muscular",
    "Diarrea",
    "Ninguna de las anteriores",
  ];
  return (
    <Cuestionario
      nextView="Third"
      pregunta="Acualmente tienes alguno de estos sintomas?"
      opciones={opciones}
      navigation={navigation}
    />
  );
};
export default SecondScreen;
