import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screens from '../componenets/Screens';
import colors from '../config/colors';
import ListItem from '../componenets/ListItem';
import Icon from '../componenets/Icon';
import ListItemSeparator from '../componenets/ListItemSeparator';

const menuItems = [
	{
		title: 'My Listing',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

function AccountScreen() {
	return (
		<Screens style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title='Demola Alaofin'
					subTitle='demolatheophilus8@gmail.com'
					image={require('../assets/mosh.jpg')}
				/>
			</View>

			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							ImageComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={<ListItemSeparator />}
				/>
			</View>

			<View style={styles.container}>
				<ListItem
					title='Logout'
					ImageComponent={
						<Icon
							name='logout'
							backgroundColor='#ffe66d'
						/>
					}
				/>
			</View>
		</Screens>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 10,
		//flex: 1,
		//backgroundColor: colors.white,
	},
});

export default AccountScreen;
