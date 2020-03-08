import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';

export default class Profile extends React.Component {
	render() {
		return (
			<View style={styles.container}>

				<Image source={require('../../assets/Images/professeur.png')} style={styles.ImageView}/>

				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{textAlign : 'center' ,color: 'white'}}>S'inscrire</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{textAlign : 'center', color: 'white'}}>Devenir Prof</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ButtonStyle}>
					<Text style={{textAlign : 'center', color: 'white' }}>Se connecter</Text>
				</TouchableOpacity>

                
                
     
	 
	 </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        width: '100%',
        height: '100%',
		
    },
    overlayContainer : {
        flex: 1,
        backgroundColor : 'rgba(47,163,218, .4)'
    },
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	ImageView:{
		width: 400,
		height: 400
	},
	ButtonStyle:{

		backgroundColor: '#0081ff',
		borderRadius:5,
		height : 50,
		width : 100,
	}
});