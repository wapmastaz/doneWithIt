import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from '../componenets/AppText';
import ListItem from '../componenets/ListItem';

function ListingsDetailScreen(props) {
	return (
		<View>
			<Image
				style={styles.image}
				source={require('../assets/jacket.jpg')}
			/>
			<View style={styles.cardDetails}>
				<AppText style={styles.title}>Red Jacket For Sale</AppText>
				<AppText style={styles.subTitle}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/mosh.jpg')}
						title='Demola Alaofin'
						subTitle='5 Listings'
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 400,
	},
	cardDetails: {
		padding: 20,
	},
	title: {
		marginBottom: 7,
	},
	subTitle: {
		fontWeight: 'bold',
		color: colors.secondary,
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingsDetailScreen;
