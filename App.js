// import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	Button,
	Alert,
	Platform,
	StatusBar,
	Dimensions,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/componenets/AppText';
import colors from './app/config/colors';
import AppButton from './app/componenets/AppButton';
import Card from './app/componenets/Card';
import ListingsDetailScreen from './app/screens/ListingsDetailScreen';
import MessageScreens from './app/screens/MessageScreens';
import ListItem from './app/componenets/ListItem';
import Screens from './app/componenets/Screens';
import Icon from './app/componenets/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/componenets/AppTextInput';

export default function App() {
	return (
		<Screens>
			<AppTextInput placeholder="email address" icon={'email'} />
		</Screens>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},

	cardContainer: {
		backgroundColor: '#f8f4f4',
		padding: 20,
		flex: 1,
		paddingTop: 100,
	},
});
