import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles'

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			dataSource:[]
		};
	}

	componentDidMount(){
		fetch("https://my-json-server.typicode.com/Thalesdc/API/Users")
		.then(response => response.json())
		.then((responseJson)=> {
			this.setState({
				loading: false,
				dataSource: responseJson
			})
		})
		.catch(error=>console.log(error)) //to catch the errors if any
	}

	
	renderItem=(data)=>
		<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
			<Text style={styles.itemList}>{data.item.firstname} {data.item.lastname} </Text>
			<Text style={styles.itemList}>{data.item.age} </Text>
			<View style={{
				backgroundColor: data.item.colorID.hex,
				height: 20,
				width: 20
			}}/>
		</View>

	render () {
		if(this.state.loading){
			return( 
			<View style={styles.loadingContainer}>
				<Text style={styles.itemList}>Loading...</Text>
			</View>
		)}

		return(

			<FlatList
				data= {this.state.dataSource}
				renderItem = {item=> this.renderItem(item)}
				keyExtractor= {item=>item.id.toString()}
			/>
		)

	}
}

export default Users;