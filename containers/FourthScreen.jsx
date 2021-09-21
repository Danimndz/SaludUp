import React from "react";
import Cuestionario from "../components/cuestionario";

const FourthScreen = ({ navigation }) => {
  const opciones = ["si", "no"];
  return (
    <Cuestionario
      nextView="Generador"
      pregunta="Eres un contacto cercano de alguna persona que padece COVID-19
    confirmado?"
      opciones={opciones}
      navigation={navigation}
    />
  );
};

export default FourthScreen;
