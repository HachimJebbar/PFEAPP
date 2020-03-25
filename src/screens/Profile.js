import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput} from 'react-native';




export default class Profile extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		return (
			<View style={styles.container}>
				<View style={styles.container0}>
					<Image source={require('../../assets/Images/profil.png')} style = {styles.ImageView1} />
					<Text>Profil </Text>

				</View>

				<View style={styles.imagesView}>
					<View style={styles.container1}>
						<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} >
							<Image source={require('../../assets/Images/info_general.png')} style = {styles.ImageView1} />
							<Text>Informations générales </Text>

						</TouchableOpacity>
						<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('informatique')} >

							<Image source={require('../../assets/Images/Annonces.png')} style = {styles.ImageView1} />
							<Text>Annonces </Text>
						</TouchableOpacity>
					</View>
					<View style={styles.container2}>
						<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('dev')} >

							<Image source={require('../../assets/Images/msg.png')} style = {styles.ImageView1} />
							<Text>Boite de message</Text>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('communication')} >

							<Image source={require('../../assets/Images/mpd.png')} style = {styles.ImageView1} />
							<Text>Mot de passe</Text>
						</TouchableOpacity>
					</View>
				</View>


			</View>
		);
	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container1: {
		flexDirection: 'row'

	},
	container2 : {
		flexDirection: 'row'
	},
	input:{
		width : 340,
		height : 50 ,
		padding : 15 ,
		borderWidth : 7,
		borderColor : '#F5F1F1',
		borderRadius:5,
		marginVertical : 40 ,
		marginLeft : 40 ,
	},
	ImageView1: {
		// justifyContent : 'center',
		// alignItems : 'center',
		width: 100,
		height: 100,
		marginLeft : 40 ,
		marginVertical : 15 ,

	},
	text1 : {
		fontSize : 24,
		color : '#62A7A9',
		marginBottom : 10 ,
		marginVertical : 40 ,
		marginLeft : 40 ,
	},
	text2 : {
		fontSize : 24,
		color : '#62A7A9',
		marginLeft : 40 ,
	},
	imagesView:{
		flexDirection: 'column',
		alignItems: 'center',
	}
});