import { StyleSheet } from "react-native";

export const QuestionarioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(74,153,187,1)",
  },
  nombre: {
    fontFamily: "Symbol",
    color: "rgba(218,198,198,1)",
    fontSize: 20,
    marginTop: 5,
  },
  nombreInput: {
    fontFamily: "Symbol",
    color: "#121212",
    height: 33,
    width: 116,
    fontSize: 20,
    marginLeft: 24,
  },
  nombreRow: {
    height: 33,
    flexDirection: "row",
    marginTop: 69,
    marginLeft: 79,
    marginRight: 78,
  },
  pregunta1: {
    fontFamily: "Symbol",
    color: "rgba(237,212,212,1)",
    fontSize: 30,
    marginTop: 70,
    marginLeft: 28,
  },
  p1op1: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
    marginTop: 5,
  },
  switch1: {
    marginLeft: 46,
  },
  p1op1Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 51,
    marginRight: 61,
  },
  p1op2: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
    marginTop: 3,
  },
  switch2: {
    marginLeft: 46,
  },
  p1op2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 51,
    marginRight: 61,
  },
  p1op3: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
  },
  switch3: {
    marginLeft: 45,
  },
  p1op3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 52,
    marginRight: 61,
  },
  p1op4: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
  },
  switch4: {
    marginLeft: 46,
  },
  p1op4Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 51,
    marginRight: 61,
  },
  p1op5: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
    marginTop: 3,
  },
  switch5: {
    marginLeft: 46,
  },
  p1op5Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 51,
    marginRight: 61,
  },
  p1op6: {
    fontFamily: "Symbol",
    color: "rgba(239,229,229,1)",
    marginTop: 6,
  },
  switch6: {
    marginLeft: 46,
  },
  p1op6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 51,
    marginRight: 61,
  },
  button: {
    width: 73,
    height: 61,
    backgroundColor: "#d85151",
    borderRadius: 70,
    marginTop: 119,
    marginLeft: 268,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 41,
    marginTop: 8,
    marginLeft: 16,
  },
});

export const styles_ = (colorHeader, colorBody) => {
  let backColorHeader = colorHeader;
  let backColorbody = colorBody;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backColorHeader,
    },
    rect: {
      width: 375,
      height: 199,
      backgroundColor: backColorHeader,
      marginTop: 32,
    },
    permanezcaEnCasa: {
      fontFamily: "Symbol",
      color: "#ffff",
      textAlign: "center",
      fontSize: 50,
      marginTop: 60,
      marginLeft: 10,
    },
    rect2: {
      width: 375,
      height: 559,
      backgroundColor: backColorbody,
    },
    fecha271121: {
      fontFamily: "Hiragino Sans",
      color: "#ffff",
      fontSize: 40,
      marginTop: 40,
      marginLeft: 30,
    },
    hora1123: {
      fontFamily: "Hiragino Sans",
      color: "#ffff",
      fontSize: 40,
      marginTop: 15,
      marginLeft: 100,
    },
    loremIpsum2: {
      fontFamily: "Kailasa",
      flex: 0.5,
      flexWrap: "wrap",
      color: "#ffff",
      fontSize: 45,
      height: 70,
      width: 360,
      textAlign: "center",
      marginTop: 28,
      marginLeft: 10,

      // marginLeft: 9,
    },

    loremIpsum: {
      fontFamily: "Symbol",
      color: "#ffff",
      fontSize: 20,
      textAlign: "center",
      // marginTop: 1,
    },
  });
};
