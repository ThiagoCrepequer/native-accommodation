import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './app/components/Header';
import { Search } from './app/components/Search';
import { Nav } from './app/components/Nav';

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<Header location='Brasília' />
				<Search />
				<StatusBar style="auto" />
			</View>

			<Nav />

			<View>
				
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
});
