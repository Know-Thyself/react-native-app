import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImagesScreen from './src/screens/ImagesScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorsScreen from './src/screens/ColorsScreen'
import SquareScreen from './src/screens/SquareScreen'
import TextInput from './src/screens/TextScreen'

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
		Images: ImagesScreen,
		Counter: CounterScreen,
		Colors: ColorsScreen,
		Square: SquareScreen,
		Text: TextInput,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App',
		},
	}
)

export default createAppContainer(navigator)
