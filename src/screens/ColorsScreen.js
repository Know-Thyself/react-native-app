import { useState } from 'react'
import { View, Button, StyleSheet, FlatList } from 'react-native'

const ColorsScreen = () => {
	const [colors, setColors] = useState([])

	return (
		<View>
			<Button
				title='Add new color'
				onPress={() => setColors((prev) => prev.concat(randomRgb()))}
			/>

			<FlatList
				data={colors}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => {
					return (
						<View style={{ height: 100, width: 100, backgroundColor: item }} />
					)
				}}
			/>
		</View>
	)
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)
	return `rgb(${red}, ${green}, ${blue})`
	// const generateRandomColor = Math.floor(Math.random() * 16777215)
	// 	.toString(16)
	// 	.padStart(6, '0')
	// return `#${generateRandomColor}`
}

const styles = StyleSheet.create({
	boxStyle: {
		height: 100,
		width: 100,
		// backgroundColor: randomRgb(),
	},
})

export default ColorsScreen
