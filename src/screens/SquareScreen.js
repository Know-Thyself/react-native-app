import { View, StyleSheet } from 'react-native'
import ColorModifier from '../components/ColorModifier'
import { useReducer } from 'react'

const COLOR_VALUE = 15

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase_red':
			return state.red + action.payload > 255
				? { ...state, red: 255 }
				: { ...state, red: state.red + action.payload }
		case 'decrease_red':
			return state.red - action.payload < 0
				? { ...state, red: 0 }
				: { ...state, red: state.red - action.payload }
		case 'increase_green':
			return state.green + action.payload > 255
				? { ...state, green: 255 }
				: { ...state, green: state.green + action.payload }
		case 'decrease_green':
			return state.green - action.payload < 0
				? { ...state, green: 0 }
				: { ...state, green: state.green - action.payload }
		case 'increase_blue':
			return state.blue + action.payload > 255
				? { ...state, blue: 255 }
				: { ...state, blue: state.blue + action.payload }
		case 'decrease_blue':
			return state.blue - action.payload < 0
				? { ...state, blue: 0 }
				: { ...state, blue: state.blue - action.payload }
		default:
			return state
	}
}

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
	// destructuring state
	const { red, green, blue } = state
	return (
		<View>
			<ColorModifier
				onIncrease={() =>
					dispatch({ type: 'increase_red', payload: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ type: 'decrease_red', payload: COLOR_VALUE })
				}
				color='Red'
			/>
			<ColorModifier
				onIncrease={() =>
					dispatch({ type: 'increase_green', payload: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ type: 'decrease_green', payload: COLOR_VALUE })
				}
				color='Green'
			/>
			<ColorModifier
				onIncrease={() =>
					dispatch({ type: 'increase_blue', payload: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ type: 'decrease_blue', payload: COLOR_VALUE })
				}
				color='Blue'
			/>
			<View
				style={{
					width: 200,
					height: 200,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
					alignSelf: 'center',
					marginTop: 20,
				}}
			></View>
		</View>
	)
}

const styles = StyleSheet.create({})

export default SquareScreen
