import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Configuracao, Lupa } from "./Icon";
import { BotaoColorido } from "./Botoes/BotaoColorido";

interface ISearch { }

const Search: React.FC<ISearch> = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerBusca}>
				<Lupa />
				<TextInput
					placeholder="Digite o endereço que deseja..."
					style={styles.textInput}
				/>
			</View>
			
			<View>
				<BotaoColorido>
					<Configuracao /> 
				</BotaoColorido>
			</View> 
		</View>
  	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	containerBusca: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		paddingHorizontal: 20,
		width: 290,
		backgroundColor: '#F7F7F7',
		borderRadius: 10,
	},
	textInput: {
		color: '#858585',
		height: 55,
		flex: 1
	}
})

export { Search }