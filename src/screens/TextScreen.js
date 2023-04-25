import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const TextScreen = () => {
	const [input, setInput] = useState('')
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Enter some text:</Text>
			<TextInput
				value={input}
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				onChangeText={(val) => setInput(val)}
			/>
			<Text style={styles.textStyle}>The text you entered is: {input}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	textStyle: {
		marginLeft: 20,
		fontSize: 20,
	},
	input: {
		margin: 20,
		width: 240,
		borderColor: '#333',
		borderWidth: 1,
		fontSize: 16,
	},
})

export default TextScreen
