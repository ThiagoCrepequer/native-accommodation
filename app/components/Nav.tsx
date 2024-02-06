import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BotaoPadrao } from "./BotaoPadrao";

interface INav {
}

const Nav: React.FC<INav> = () => {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>
            <BotaoPadrao width={90} height={40}>
                <Text style={styles.textoPrincipal}>Casas</Text>
            </BotaoPadrao>            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        gap: 12,
        marginTop: 20,
    },
    textoPrincipal: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: "500",
    }
})

export { Nav }