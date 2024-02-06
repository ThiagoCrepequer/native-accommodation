import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ButtonEnviar} from './app/components/Button';
import {Title} from './app/components/Title';
import { useState } from 'react';

export default function App() {
  const [clicks, setClicks] = useState(0);
  const handlePress = () => setClicks(clicks + 1); 

  return (
    <>
      <Title title='Olá, bem vindo!' subtitle="Clique no botão para somar 1" />
      
      <View style={styles.container}>
        <Text style={styles.contador}>{clicks}</Text>
        <ButtonEnviar title={'Click me!'} onPress={handlePress}/>
      </View>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contador: {
    fontSize: 30,
    color: 'black'
  }
});
