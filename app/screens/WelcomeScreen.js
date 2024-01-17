import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../componenets/AppButton';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			blurRadius='10'
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			{/* logo and text */}
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../assets/logo-red.png')}
				/>
				<Text style={styles.logoText}>Sell what you don't need</Text>
			</View>
			{/* login button */}
			<View style={styles.buttonContainer}>
				<AppButton title='Login' />
				<AppButton
					title='Register'
					color='secondary'
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#fc5c65',
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoText: {
		fontSize: 25,
		textTransform: 'capitalize',
		paddingVertical: 10,
		fontWeight: '600',
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#4ecdc4',
	},
	buttonContainer: {
		width: '100%',
		padding: 20,
	},
});
export default WelcomeScreen;
