import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const goToCharDetails = (charName) => {
    navigation.navigate("Character", { charName });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => goToCharDetails("Luke Skywalker")}>
        <Text style={styles.buttonText}>Luke Skywalker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToCharDetails("Darth Vader")}>
        <Text style={styles.buttonText}>Darth Vader</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToCharDetails("Han Solo")}>
        <Text style={styles.buttonText}>Han Solo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToCharDetails("Yoda")}>
        <Text style={styles.buttonText}>Yoda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToCharDetails("Chewbacca")}>
        <Text style={styles.buttonText}>Chewbacca</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#000000",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#FFE81F",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    color: "#FFE81F",
  },
});