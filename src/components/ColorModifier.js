import { Text, View, Button, StyleSheet } from 'react-native'

const ColorModifier = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text style={styles.textStyle}>{color}</Text>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20,
	},
})

export default ColorModifier
