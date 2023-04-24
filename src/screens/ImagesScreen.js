import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImagesScreen = () => {
	return (
		<View>
			<Text>Images Screen</Text>
			<ImageDetail
				title='Forest'
				img={require('../../assets/images/forest.jpg')}
				score={9}
			/>
			<ImageDetail
				title='Beach'
				img={require('../../assets/images/beach.jpg')}
				score={6}
			/>
			<ImageDetail
				title='Mountain'
				img={require('../../assets/images/mountain.jpg')}
				score={10}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})

export default ImagesScreen
