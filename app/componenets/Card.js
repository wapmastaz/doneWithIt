import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image
				style={styles.image}
				source={image}
			/>
			<View style={styles.cardDetails}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
    overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200,
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
});

export default Card;
