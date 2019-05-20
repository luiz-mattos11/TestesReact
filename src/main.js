import React from 'react';
import styles from './Pages/styles'
import { Text, View, Button } from 'react-native';

export default class Main extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Button title="Prosseguir para o formulário"/>
				<Button title="Verificar cadastros"/>
			</View>
		);
	}
}