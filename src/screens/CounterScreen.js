import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
	const [counter, setCounter] = useState(0)

	return (
		<View>
			<Text style={styles.textStyle}>Current number: {counter}</Text>
			<Button title='Increment' onPress={() => setCounter(counter + 1)} />
			<Button title='Decrement' onPress={() => setCounter(counter - 1)} />
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
})

export default CounterScreen
