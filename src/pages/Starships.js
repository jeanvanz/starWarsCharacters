import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from "react-native";
import axios from "axios";

export default function Starships({ route }) {
    const [loading, setLoading] = useState(false);
    const [starships, setStarships] = useState([]);
    const { starshipsUrl } = route.params;

    useEffect(() => {
        const fetchStarships = async () => {
            setLoading(true);

            if (!starshipsUrl || starshipsUrl.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const requests = starshipsUrl.map((url) => axios.get(url));
                const responses = await Promise.all(requests);
                const fetchedStarships = responses.map((response) => response.data);
                setStarships(fetchedStarships);
            } catch (error) {
                Alert.alert("Erro", "Não foi possível carregar as naves.");
            } finally {
                setLoading(false);
            }
        };

        fetchStarships();
    }, [starshipsUrl]);

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#FFE81F" />
            ) : starships.length > 0 ? (
                <FlatList
                    data={starships}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.detailsContainer}>
                            <Text style={styles.text}>Nome: {item.name}</Text>
                            <Text style={styles.text}>Modelo: {item.model}</Text>
                            <Text style={styles.text}>Passageiros: {item.passengers}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.text}>Nenhuma nave disponível para este personagem.</Text>
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