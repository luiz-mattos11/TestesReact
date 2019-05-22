const baseURL = 'https://my-json-server.typicode.com/Thalesdc/API/'

function doPost(endPoint, jsonArgs, callback){
	fetch(baseURL + endPoint, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: jsonArgs,
	})
	.then(response => response.json())
	.then((responseJson)=> {
		callback(responseJson)
	})
	.catch(error=>console.log(error))
}

function getUsers(endPoint, callback){
	fetch(baseURL + endPoint)
		.then(response => response.json())
		.then((responseJson)=> {
			callback(responseJson)
		})
		.catch(error=>console.log(error))
}

export {doPost, getUsers};