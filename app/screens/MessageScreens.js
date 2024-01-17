import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../componenets/ListItem';
import Screens from '../componenets/Screens';
import ListItemSeparator from '../componenets/ListItemSeparator';
import ListItemDeleteAction from '../componenets/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 3,
		title: 'T3',
		description: 'D3',
		image: require('../assets/mosh.jpg'),
	},
];

function MessageScreens(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		// Delete the message from messages
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screens>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 3,
							title: 'T3',
							description: 'D3',
							image: require('../assets/mosh.jpg'),
						},
					]);
				}}
			/>
		</Screens>
	);
}

export default MessageScreens;
