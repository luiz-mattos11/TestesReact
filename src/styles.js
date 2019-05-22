import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		alignItems: 'stretch',
	},
	listContainer: {
		flex: 1,
		marginTop: 30,
		marginLeft: 10,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		alignItems: 'stretch',
	},
	loadingContainer: {
		flex: 1,
		marginTop: 30,
		marginLeft: 10,
		justifyContent: 'center',
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	button: {
		height: 50,
		margin: 10,
		borderRadius: 4,
		backgroundColor: '#0000FF',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		fontWeight: 'bold',
		fontSize: 16,
		color: "#FFF",
	},

	itemList: {
		fontWeight: 'bold',
		fontSize: 16,
		color: "#000"
	},
	formViewContainer: {
		flex: 1,
		marginTop: 30,
		justifyContent: 'flex-start',
		backgroundColor: '#FFF',
		alignItems: 'stretch',
	},
	formButtonSubmitView: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	formButtonSubmit: {
		height: 50,
		margin: 10,
		borderRadius: 4,
		backgroundColor: '#0000FF',
		justifyContent: 'center',
		alignItems: 'center'
	},
	formInputTextItem: {
		borderBottomColor: '#000000',
		borderBottomWidth: 1,
		margin: 30
	},
	divider: {
		backgroundColor: "#000",
		height: 2,
		marginTop: 10,
		marginBottom: 10
	}
});
export default styles