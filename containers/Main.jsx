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

// https://www.npmjs.com/package/react-native-vector-icons

// const Main = ({ navigation }) => {
//   const [nameP, setName] = useState("");
//   const [values, setValues] = useState(null);
//   const dispatch = useDispatch();

//   const functionToPass = (obj) => {
//     setValues(() => obj);
//   };

//   const nextView = () => {
//     if (nameP === "") {
//       alert("Debe introducir su nombre");
//     } else {
//       dispatch(setName_(nameP));
//       dispatch(setAnswer(values));
//       navigation.navigate("Second");
//     }
//   };
//   const opciones = [
//     "Fiebre igual o mayor a 38°C",
//     "Dificultad al respirar",
//     "Escalofríos",
//     "Tos",
//     "Pérdida del sentido del gusto u olfato",
//     "Ninguna de las anteriores",
//   ];
//   return (
//     <View style={QuestionarioStyles.container}>
//       <View style={QuestionarioStyles.nombreRow}>
//         <Text style={QuestionarioStyles.nombre}>Nombre:</Text>
//         <TextInput
//           placeholder="Nombre"
//           onChangeText={(text) => setName(text)}
//           value={nameP}
//           style={QuestionarioStyles.nombreInput}
//         ></TextInput>
//       </View>
//       <Text style={QuestionarioStyles.pregunta1}>
//         Acualmente tienes alguno de estos sintomas?
//       </Text>
//       {opciones.map((pregunta, idx) => (
//         <Opcion
//           dis={values ? true : false}
//           key={idx}
//           id={idx + 1}
//           viewStyle={QuestionarioStyles.p1op1Row}
//           textStyle={QuestionarioStyles.p1op1}
//           switchStyle={QuestionarioStyles.switch1}
//           question={pregunta}
//           functionPassed={functionToPass}
//         />
//       ))}
//       <TouchableOpacity
//         disabled={
//           values === null ? true : values.value === false ? true : false
//         }
//         style={QuestionarioStyles.button}
//         onPress={nextView}
//       >
//         <Icon name="chevron-thin-right" style={QuestionarioStyles.icon}></Icon>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Main;
