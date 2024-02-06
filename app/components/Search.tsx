import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Configuracao, Lupa } from "./Icon";
import { BotaoPadrao } from "./BotaoPadrao";

interface ISearch { }

const Search: React.FC<ISearch> = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerBusca}>
				<Lupa />
				<TextInput
					placeholder="Search addres, or near you"
					style={styles.textInput}
				/>
			</View>
			
			<View>
				<BotaoPadrao>
					<Configuracao /> 
				</BotaoPadrao>
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