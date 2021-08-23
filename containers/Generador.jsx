import React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Body from "../components/body";
import Header from "../components/header";

const Generador = () => {
  const name = useSelector((state) => state.name);
  const answers = useSelector((state) => state.answers);
  const validFun = () => {
    let valid = true;
    const design = {
      backColorHeader: "#027B02",
      backColorBody: "#7cbd7c",
      headerTxt: "Puede ingresar al campus",
      bodyTxt: "Su estado es conveniente para ingresar a la Universidad",
    };
    if (answers[0].id !== 6 || answers[1].id !== 6) valid = false;
    if (answers[2].id === 1 || answers[3].id === 1) valid = false;
    if (valid == false) {
      design.backColorHeader = "rgba(164,39,39,1)";
      design.backColorBody = "rgba(193, 118, 118, 1)";
      design.headerTxt = "Permanezca en casa";
      design.bodyTxt =
        "Su estado no es conveniente para ingresar a la Universidad.\nEn caso de estar en la universidad, dirígete al módulo de evaluación COVID";
    }
    return design;
  };

  useEffect(() => {
    validFun();
  }, []);

  return (
    <View>
      <Header
        colorHeader={validFun().backColorHeader}
        colorBody={validFun().backColorBody}
        headerTxt={validFun().headerTxt}
      />
      <Body
        nombre={name}
        colorHeader={validFun().backColorHeader}
        colorBody={validFun().backColorBody}
        bodyTxt={validFun().bodyTxt}
      />
    </View>
  );
};

export default Generador;
