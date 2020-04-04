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
				<View style={styles.imagesView}>
					<View style={styles.container1}>
						<View style={styles.container11}>
						<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('infoupdate')} >
							<Image source={require('../../assets/Images/info_general.png')} style = {styles.ImageView1} />
							<Text style={styles.text }>Informations </Text>

						</TouchableOpacity>
						</View>
						<View style={styles.container12}>
							<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('adresseupdate')} >
								<Image source={require('../../assets/Images/map.png')} style = {styles.ImageView1} />
								<Text style={styles.text }>Adresse </Text>
							</TouchableOpacity>
						</View>
					</View>
					</View>
					<View style={styles.container2}>
						<View style={styles.container21}>
							<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('ProfilUpdate')} >
								<Image source={require('../../assets/Images/camera.png')} style = {styles.ImageView1} />
								<Text style={styles.text }>Photo de profil</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.container22}>
							<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('diplome')} >

								<Image source={require('../../assets/Images/diplome.png')} style = {styles.ImageView1} />
								<Text style={styles.text }>Diplome</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.container3}>
						<View style={styles.container31}>
							<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('identite')} >

								<Image source={require('../../assets/Images/identite.png')} style = {styles.ImageView1} />
								<Text style={styles.text }>Identité</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.container32}>
							<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('mdpupdate')} >

								<Image source={require('../../assets/Images/mpd.png')} style = {styles.ImageView1} />
								<Text style={styles.text }>Mot de passe</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				</View>
		);
	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F1F1',
	},
	container1: {
		flexDirection: 'row',
		padding: 10,
	},
	container11: {
		backgroundColor: '#fff',
		width : '40%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,
	},
	container12: {
		backgroundColor: '#fff',
		width : '43%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,

	},
	container2 : {
		flexDirection: 'row',
		padding: 10,
		marginLeft: 20,
	},
	container21: {
		backgroundColor: '#fff',
		width : '45%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,

	},
	container22: {
		backgroundColor: '#fff',
		width : '45%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,

	},
	container3 : {
		flexDirection: 'row',
		padding: 10,
		marginLeft: 20,
	},
	container31: {
		backgroundColor: '#fff',
		width : '45%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,

	},
	container32: {
		backgroundColor: '#fff',
		width : '45%',
		borderColor : '#F5F1F1',
		borderWidth:5,
		borderRadius:35	,

	},
	container0 : {
		flexDirection: 'column',

	},
	ImageView1: {
		// justifyContent : 'center',
		// alignItems : 'center',
		width: 100,
		height: 100,
		marginVertical : 15 ,
		marginLeft: '21%',

	},
	text : {
		fontSize : 18,
		color : '#AFA5A5',
		marginBottom : 10 ,
		fontWeight: 'bold',
		textAlign : 'center',
		width :'90%',
	},
	imagesView:{
		flexDirection: 'column',
		alignItems: 'center',
	}
});