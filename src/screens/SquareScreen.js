import { Text, View, StyleSheet } from 'react-native'
import ColorModifier from '../components/ColorModifier'
import { useState } from 'react'

const COLOR_VALUE = 15

const SquareScreen = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)

	const setColor = (color, change) => {
		switch (color) {
			case 'red':
				red + change > 255
					? setRed(255)
					: red + change < 0
					? setRed(0)
					: setRed(red + change)
				return
			case 'green':
				green + change > 255
					? setGreen(255)
					: green + change < 0
					? setGreen(0)
					: setGreen(green + change)
				return
			case 'blue':
				blue + change > 255
					? setBlue(255)
					: blue + change < 0
					? setBlue(0)
					: setBlue(blue + change)
				return
			default:
				return
		}
	}
	return (
		<View>
			<ColorModifier
				onIncrease={() => setColor('red', COLOR_VALUE)}
				onDecrease={() => setColor('red', -1 * COLOR_VALUE)}
				color='Red'
			/>
			<ColorModifier
				onIncrease={() => setColor('green', COLOR_VALUE)}
				onDecrease={() => setColor('green', -1 * COLOR_VALUE)}
				color='Green'
			/>
			<ColorModifier
				onIncrease={() => setColor('blue', COLOR_VALUE)}
				onDecrease={() => setColor('blue', -1 * COLOR_VALUE)}
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
