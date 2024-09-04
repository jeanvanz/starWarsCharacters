import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Creators() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text}>Jean Folle Vanz</Text>
                <Text style={styles.text}>RA: 1134254</Text>
                <Text style={styles.text}>Email: 1134254@atitus.edu.br</Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>Maria Eduarda Carvalho Dornelles</Text>
                <Text style={styles.text}>RA: 1134791</Text>
                <Text style={styles.text}>Email: 1134791@atitus.edu.br</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container1: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#000000",
    },
    text: {
        fontSize: 22,
        fontWeight: "300",
        color: "#FFE81F",
        marginVertical: 5,
    },
});