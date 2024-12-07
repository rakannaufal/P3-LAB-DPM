import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CalculatorScreen from "./src/screens/CalculatorScreen";

export default function App() {
  return (
    <NavigationContainer>
      <CalculatorScreen />
    </NavigationContainer>
  );
}
