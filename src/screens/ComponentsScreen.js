import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
	return (
		<View>
			<Text style={styles.header}>Getting started with React Native!</Text>
			<Text style={styles.textStyle}>
				Learning to build mobile apps with React Native is a lot of fun!
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		fontSize: 40,
		width: '90%',
		alignSelf: 'center',
		textAlign: 'left',
	},
	textStyle: {
		fontSize: 24,
		width: '95%',
		alignSelf: 'center',
		textAlign: 'left',
	},
})

export default ComponentsScreen
