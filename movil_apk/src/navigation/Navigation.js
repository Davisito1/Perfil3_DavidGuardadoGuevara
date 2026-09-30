import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{ headerStyle: { backgroundColor: "#4F46E5" }, headerTintColor: "#fff" }}
      >
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: "Estudiante" }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: "Datos" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}