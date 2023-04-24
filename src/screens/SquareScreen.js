import { View, StyleSheet } from 'react-native'
import ColorModifier from '../components/ColorModifier'
import { useReducer } from 'react'

const COLOR_VALUE = 15

const reducer = (state, action) => {
	switch (action.colorToChange) {
		case 'red':
			return state.red + action.amount > 255
				? { ...state, red: 255 }
				: state.red + action.amount < 0
				? { ...state, red: 0 }
				: { ...state, red: state.red + action.amount }
		case 'green':
			return state.green + action.amount > 255
				? { ...state, green: 255 }
				: state.green + action.amount < 0
				? { ...state, green: 0 }
				: { ...state, green: state.green + action.amount }
		case 'blue':
			return state.blue + action.amount > 255
				? { ...state, blue: 255 }
				: state.blue + action.amount < 0
				? { ...state, blue: 0 }
				: { ...state, blue: state.blue + action.amount }
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
					dispatch({ colorToChange: 'red', amount: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'red', amount: -1 * COLOR_VALUE })
				}
				color='Red'
			/>
			<ColorModifier
				onIncrease={() =>
					dispatch({ colorToChange: 'green', amount: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'green', amount: -1 * COLOR_VALUE })
				}
				color='Green'
			/>
			<ColorModifier
				onIncrease={() =>
					dispatch({ colorToChange: 'blue', amount: COLOR_VALUE })
				}
				onDecrease={() =>
					dispatch({ colorToChange: 'blue', amount: -1 * COLOR_VALUE })
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
