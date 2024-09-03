import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from "react-native";
import axios from "axios";

export default function Films({ route }) {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const { filmsUrl } = route.params;

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);

      if (!filmsUrl || filmsUrl.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const requests = filmsUrl.map((url) => axios.get(url));
        const responses = await Promise.all(requests);
        const fetchedFilms = responses.map((response) => response.data);
        setFilms(fetchedFilms);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar os filmes.");
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [filmsUrl]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFE81F" />
      ) : films.length > 0 ? (
        <FlatList
          data={films}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.detailsContainer}>
              <Text style={styles.text}>Título: {item.title}</Text>
              <Text style={styles.text}>Diretor: {item.director}</Text>
              <Text style={styles.text}>Data de Lançamento: {item.release_date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.text}>Nenhum filme disponível para este personagem.</Text>
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
});