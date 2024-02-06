import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { SetaBaixo, Notificacao } from './Icon';

interface IHeader {
    location: string;
}

const Header: React.FC<IHeader> = ({ location }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Location</Text>
                <View style={styles.locationContainer}>
                    <Text style={styles.location}>{location}</Text>
                    <SetaBaixo />
                </View> 
            </View>
            <View style={styles.containerNotificacao}>
                <Notificacao/>
            </View>
        </SafeAreaView>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 115,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    containerNotificacao: {
        position: 'relative'
    },
    notificacoes: {
        position: 'absolute',
        top: 30,
        right: 0,
        backgroundColor: 'white',
        width: 230,
        height: 200,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 12,
        color: '#838383'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    location: {
        fontSize: 21,
        fontWeight: '400'
    },
    tinyLogo: {
        color: 'black',
        width: 50,
        height: 50,
      },
})

export { Header };