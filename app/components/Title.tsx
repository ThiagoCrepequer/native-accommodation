import React from "react";
import { Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

interface ITitle {
    title: string;
    subtitle: string;
}

const Title: React.FC<ITitle> = ({ title, subtitle }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    }
})

export { Title };