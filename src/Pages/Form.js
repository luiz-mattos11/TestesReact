import React from 'react'
import styles from "../styles"
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fnameColor: "#000",
			lnameColor: "#000",
			ageColor: "#000",
			first: "",
			last: "",
			age: "",
			textState: "Submit"
		}
	}

	verifyData(){
		let v = true
		if (this.state.first == ""){
			v = false
			this.setState({fnameColor: "#F00"})
		} else this.setState({fnameColor: "#000"})

		if (this.state.last == ""){
			v = false
			this.setState({lnameColor: "#F00"})
		} else this.setState({lnameColor: "#000"})
		
		if (this.state.age == ""){
			v = false
			this.setState({ageColor: "#F00"})
		} else this.setState({ageColor: "#000"})

		return v
	}

	submitClicked = async () => {
		if(this.verifyData()){	
			this.setState({
				textState: "Loading..."
			})

			fetch('https://my-json-server.typicode.com/Thalesdc/API/Users', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstname: this.state.first,
					lastname: this.state.last,
					age: this.state.age,
				}),
			})
			.then(response => response.json())
			.then((responseJson)=> {
				this.props.navigation.navigate('Data', responseJson);
				console.log(responseJson)
			})
			.catch(error=>console.log(error)) //to catch the errors if any
		}
	}

	render(){
		return (
		<View style={styles.formViewContainer}>
			<View style={{borderBottomColor: this.state.fnameColor,
						borderBottomWidth: 1,
						margin: 30}}>
				<TextInput
					onChangeText={text => this.setState({first: text})}
					placeholder="First Name"
				/>
			</View>
			<View style={{borderBottomColor: this.state.lnameColor,
						borderBottomWidth: 1,
						margin: 30}}>
				<TextInput
					onChangeText={text => this.setState({last: text})}
					placeholder="Last Name"
				/>
			</View>
			<View style={{borderBottomColor: this.state.ageColor,
						borderBottomWidth: 1,
						margin: 30}}>
				<TextInput
					onChangeText={text => this.setState({age: text})}
					placeholder="Age"
				/>
			</View>
			<View style={styles.formButtonSubmitView}>
				<TouchableOpacity style={styles.formButtonSubmit} onPress={this.submitClicked}>
					<Text style={styles.buttonText}>{this.state.textState}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)}
}

export default Form