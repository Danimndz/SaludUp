import React from "react";
import Cuestionario from "../components/cuestionario";

const Main = ({ navigation }) => {
  const opciones = [
    "Fiebre igual o mayor a 38°C",
    "Dificultad al respirar",
    "Escalofríos",
    "Tos",
    "Pérdida del sentido del gusto u olfato",
    "Ninguna de las anteriores",
  ];
  return (
    <Cuestionario
      nextView="Second"
      pregunta="Acualmente tienes alguno de estos sintomas?"
      opciones={opciones}
      navigation={navigation}
    />
  );
};

export default Main;
