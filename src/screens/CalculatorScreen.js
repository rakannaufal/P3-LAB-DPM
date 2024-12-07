import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import GlobalStyles from "../styles/styles";
import {
  calculateSum,
  calculateDifference,
  calculateProduct,
  calculateQuotient,
} from "../utils/calculations";

const CalculatorScreen = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <Text style={styles.header}>Kalkulator</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan angka pertama"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukan angka kedua"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <Button
          title=" + "
          onPress={() => setResult(calculateSum(num1, num2))}
        />
        <Button
          title=" - "
          onPress={() => setResult(calculateDifference(num1, num2))}
        />
        <Button
          title=" * "
          onPress={() => setResult(calculateProduct(num1, num2))}
        />
        <Button
          title=" : "
          onPress={() => setResult(calculateQuotient(num1, num2))}
        />
      </View>
      <View style={styles.resetButton}>
        <Button title="Reset" onPress={handleReset} color="#FF0000" />
      </View>
      {result !== null && <Text style={styles.result}>Hasil : {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resetButton: {
    marginTop: 10,
    width: 100,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#4caf50",
    fontWeight: "bold",
  },
});

export default CalculatorScreen;
