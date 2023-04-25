import React from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from 'react-native'

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Home Screen</Text>
			<Button
				onPress={() => navigation.navigate('Components')}
				title='Go to Components Demo'
			/>
			<Button
				onPress={() => navigation.navigate('List')}
				title='Go to List Demo'
			/>
			<Button
				onPress={() => navigation.navigate('Counter')}
				title='Go to Counter Demo'
			/>
			<Button
				onPress={() => navigation.navigate('Colors')}
				title='Go to Colors Demo'
			/>
			<Button
				onPress={() => navigation.navigate('Square')}
				title='Go to Square Screen Demo'
			/>
			{/* easier to customise and more flexible alternatives to a button component */}
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('Text')}
			>
				<Text style={styles.buttonText}>Go to Text Input Screen Demo</Text>
			</Pressable>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Images')}
			>
				<Text style={styles.buttonText}>Go to Images Demo</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
	buttonText: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#fff',
	},
	button: {
		backgroundColor: 'blue',
		padding: 12,
		margin: 10,
		alignSelf: 'center',
		borderRadius: 8,
		// color: '#fff',
	},
})

export default HomeScreen
