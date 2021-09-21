import React from "react";
import Cuestionario from "../components/cuestionario";

const ThirdScreen = ({ navigation }) => {
  const opciones = ["si", "no"];
  return (
    <Cuestionario
      nextView="Fourth"
      pregunta="Has regresado de algún viaje internacional en los ultimos 14 dias?"
      opciones={opciones}
      navigation={navigation}
    />
  );
};

export default ThirdScreen;
