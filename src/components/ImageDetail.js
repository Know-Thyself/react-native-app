import { View, Text, StyleSheet, Image } from 'react-native'
const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.img} />
			<Text>{props.title} Image Detail</Text>
			<Text>Image Score: {props.score}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default ImageDetail
