import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screens from '../componenets/Screens';
import Card from '../componenets/Card';
import ListItemSeparator from '../componenets/ListItemSeparator';
import colors from '../config/colors';

const Listings = [
	{
		id: 1,
		title: 'Red Jacket For Sale',
		price: 100,
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'Couch For Sale',
		price: 500,
		image: require('../assets/couch.jpg'),
	},
];

function ListingScreen() {
	return (
		<Screens style={styles.screen}>
			<FlatList
				data={Listings}
				keyExtractor={(list) => list.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price.toFixed(2)}
						image={item.image}
					/>
				)}
        ItemSeparatorComponent={<ListItemSeparator/>}
			/>
		</Screens>
	);
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20
  }
});

export default ListingScreen;
