import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import FourthScreen from "./containers/FourthScreen";
import Generador from "./containers/Generador";
import Main from "./containers/Main";
import SecondScreen from "./containers/SecondScreen";
import ThirdScreen from "./containers/ThirdScreen";
import { store } from "./redux/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Third"
            component={ThirdScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Fourth"
            component={FourthScreen}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="Generador"
            component={Generador}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
