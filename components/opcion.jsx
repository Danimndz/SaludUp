import React from "react";
import { useState, useEffect, useRef } from "react";
import { View, Text, Switch } from "react-native";
const Opcion = ({
  functionPassed,
  id,
  viewStyle,
  textStyle,
  switchStyle,
  question,
  dis,
}) => {
  console.log(dis);
  const [select, setSelect] = useState(0);
  const toggle = () => {
    setSelect((value) => !value);
    didMount.current = true;
  };
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      const obj = {
        id,
      };
      functionPassed(obj);
      didMount.current = false;
    }
  }, [select]);

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{question}</Text>
      <Switch
        value={select}
        onValueChange={toggle}
        style={switchStyle}
        disabled={dis}
      ></Switch>
    </View>
  );
};

export default Opcion;
