import React from 'react'
import styles from '../styles'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Main extends React.Component {
	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigate('Form')} style={styles.button}>
					<Text style={styles.buttonText}>Prosseguir para o formulário</Text>
				</TouchableOpacity>
			</View>
		);
	}
}