import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Button title="Prosseguir para o formulário"/>
				
			</View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});