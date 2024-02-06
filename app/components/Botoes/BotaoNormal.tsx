import React from "react";
import { IBotao } from "./IBotao";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

const BotaoNormal: React.FC<IBotao> = ({ onPress, children }) => {
    return (
        <TouchableWithoutFeedback >
            <View style={styles.botao}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    botao: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
    }
})

export { BotaoNormal }