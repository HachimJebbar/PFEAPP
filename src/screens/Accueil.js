import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';

export default class Accueil extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1 }>Trouver  </Text>
                <Text style={styles.text2 }>Le Professeur Parfait </Text>
                <Image source={require('../../assets/Images/professeur.png')} style={styles.ImageView}/>

                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Inscription')}>
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
    }
}

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
        fontSize : 30,
        color : '#62A7A9',
        marginBottom : 0 ,
        marginVertical : 120 ,
        marginLeft : '15%' ,
        fontWeight: 'bold',

    },
    text2 : {
        fontSize : 30,
        color : '#62A7A9',
        marginLeft : '15%' ,
        fontWeight: 'bold',

    }
});