import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({
	title,
	subTitle,
	image,
	onPress,
	ImageComponent,
	renderRightActions,
}) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight
					underlayColor={colors.light}
					onPress={onPress}
				>
					<View style={styles.container}>
						{ImageComponent}
						{image && (
							<Image
								source={image}
								style={styles.image}
							/>
						)}

						<View style={styles.listDetails}>
							<AppText style={styles.title}>{title}</AppText>
							{subTitle &&<AppText style={styles.subTitle}>{subTitle}</AppText>}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: 'white'
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	listDetails: {
		marginLeft: 10,
		justifyContent: 'center'
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: '500',
	},
});

export default ListItem;
