import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

<<<<<<< HEAD
export default class Profile extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text1 }>Trouver  </Text>
				<Text style={styles.text2 }>Le Professeur Parfait </Text>
				<Image source={require('../../assets/Images/professeur.png')} style={styles.ImageView}/>

				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{fontSize : 18, color: 'white'}}>S'inscrire</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{fontSize : 18, color: 'white'}}>Devenir Professeur</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{fontSize : 18,color: 'white' }}>Connexion</Text>
				</TouchableOpacity>





			</View>
		);
=======
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
>>>>>>> ec221fb6a8f2134dd1dd7fd5566e542afbfb7fcd
	}

<<<<<<< HEAD
const styles = StyleSheet.create({
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
=======
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
>>>>>>> ec221fb6a8f2134dd1dd7fd5566e542afbfb7fcd
	}
}