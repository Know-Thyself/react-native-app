import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
	const skillSets = [
		{ skill: 'JavaScript' },
		{ skill: 'React.js' },
		{ skill: 'Next.js' },
		{ skill: 'postgreSQL' },
		{ skill: 'HTML' },
		{ skill: 'CSS' },
		{ skill: 'Git & GitHub' },
	]
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={skillSets}
			keyExtractor={(skill) => skill.skill}
			renderItem={({ item }) => (
				<Text style={styles.listStyle}>{item.skill}</Text>
			)}
			style={styles.header}
		/>
	)
}

const styles = StyleSheet.create({
	listStyle: {
		fontSize: 20,
		marginVertical: 50,
		marginHorizontal: 10,
	},
})

export default ListScreen
