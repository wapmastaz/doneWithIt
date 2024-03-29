import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons
					name='close'
					size={35}
					color={colors.white}
				/>
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name='trash-can'
					size={35}
					color={colors.white}
				/>
			</View>
			<Image
				resizeMode='contain'
				style={styles.image}
				source={require('../assets/chair.jpg')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	closeIcon: {
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30,
	},
});

export default ViewImageScreen;
