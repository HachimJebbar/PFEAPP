import React, { Component } from "react";
import {FlatList, StyleSheet, Text} from "react-native";
import { Card } from "react-native-elements";


const data = [
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something two"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something three"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something four"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something five"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something six"
	}
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: data
		};
	}

	render() {
		return (
			<FlatList
				vertical
				numColumns={2}
				data={this.state.data}
				renderItem={({ item: rowData }) => {
					return (
						<Card
							title={null}
							image={{ uri: rowData.imageUrl }}
							containerStyle={{ padding: 0, width: 160 , alignItems : 'center'}}

						>
							<Text style={{ marginBottom: 10 }}>
								{rowData.title}
							</Text>
						</Card>
					);
				}}
				keyExtractor={(item, index) => index}
			/>
		);
	}

}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor:  '#fff',
	},
	ImageView:{
		width: 250,
		height: 250,
		borderRadius: 80,
		marginLeft : 80 ,
		marginVertical : 30 ,
	},
	ButtonStyle:{
		backgroundColor: '#62A7A9',
		borderRadius:10,
		height : 50,
		width : 250,
		marginLeft : 80 ,
		paddingLeft : 15,
		paddingTop : 12,
		marginBottom: 10,
	},
	text1 : {
		fontSize : 24,
		color : '#62A7A9',
		marginBottom : 0 ,
		marginVertical : 40 ,
		marginLeft : 90 ,
	},
	text2 : {
		fontSize : 24,
		color : '#62A7A9',
		marginLeft : 90 ,
	},
});