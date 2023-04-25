import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button
				onPress={() => navigation.navigate('Components')}
				title='Go to Components Demo'
			/>
			<Button
				onPress={() => navigation.navigate('List')}
				title='Go to List Demo'
			/>
			<Button
				onPress={() => navigation.navigate('Images')}
				title='Go to Images Demo'
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
			<Button
				onPress={() => navigation.navigate('Text')}
				title='Go to Text Input Screen Demo'
			/>
			{/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity> */}
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
})

export default HomeScreen
