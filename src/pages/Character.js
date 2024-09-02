import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Character({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);
  const { charName } = route.params;

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?search=${charName}`
        );
        const fetchedCharacter = response.data.results[0];

        if (!fetchedCharacter) {
          Alert.alert("Personagem não encontrado", `O personagem "${charName}" não foi encontrado.`);
          navigation.goBack();
        } else {
          setCharacter(fetchedCharacter);
        }
      } catch (error) {
        Alert.alert("Erro", "Erro ao obter os dados do personagem.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [charName, navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color="#FFE81F" />
      ) : (
        <>
          {character ? (
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Nome: {character.name}</Text>
              <Text style={styles.text}>Altura: {character.height} cm</Text>
              <Text style={styles.text}>Peso: {character.mass} kg</Text>
              <Text style={styles.text}>Cor dos Cabelos: {character.hair_color}</Text>
              <Text style={styles.text}>Cor da Pele: {character.skin_color}</Text>
              <Text style={styles.text}>Cor dos Olhos: {character.eye_color}</Text>
              <Text style={styles.text}>Gênero: {character.gender}</Text>
            </View>
          ) : (
            <Text style={styles.text}>Nenhum detalhe disponível</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Starships", { starshipsUrl: character.starships })}>
            <Text style={styles.buttonText}>Naves</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Films", { filmsUrl: character.films })}>
            <Text style={styles.buttonText}>Filmes</Text>
          </TouchableOpacity>
        </>
      )}
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
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FFE81F",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "300",
    color: "#FFE81F",
    marginVertical: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
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