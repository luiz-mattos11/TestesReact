import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Main from "./main"
import Users from "./Users"
import Form from "./Form"
import Data from "./Data"

const Routes = createAppContainer(
	createSwitchNavigator({
		Main,
		Users,
		Form,
		Data,
	})
)

export default Routes;