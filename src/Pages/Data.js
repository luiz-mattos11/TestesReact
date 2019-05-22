import React from 'react'

import { Text, View} from 'react-native'
import styles from '../styles'
import Users from './Users';

class Data extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	render() {
		return(
			<View style={styles.listContainer}>
				<Text>ID: {this.props.navigation.getParam("id")}</Text>
				<Text>FirstName: {this.props.navigation.getParam("firstname")}</Text>
				<Text>LastName: {this.props.navigation.getParam("lastname")}</Text>
				<Text>Age: {this.props.navigation.getParam("age")}</Text>
				
				<View style={styles.divider}/>

				<Users />
			</View>
	)}
}

export default Data