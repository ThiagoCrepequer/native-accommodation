import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BotaoColorido } from "./Botoes/BotaoColorido";
import { BotaoNormal } from "./Botoes/BotaoNormal";
import {Nav as Mock} from "../mocks/Nav";

interface INav {
}

const Nav: React.FC<INav> = () => {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <BotaoColorido width={90} height={45}>
                <Text style={styles.textoPrincipal}>{Mock.principal}</Text>
            </BotaoColorido>
            {Mock.items.map((item, index) => (
                <BotaoNormal key={index}>
                    <Text style={styles.textoSecundario}>{item}</Text>
                </BotaoNormal>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        marginHorizontal: 5,
        gap: 12,
        marginTop: 20,
    },
    textoPrincipal: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: "500",
    },
    textoSecundario: {
        color: '#858585'
    }
})

export { Nav }