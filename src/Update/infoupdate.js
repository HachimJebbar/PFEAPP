import React, { Component } from 'react';
import {View, TextInput, Text, CheckBox, TouchableOpacity, StyleSheet} from 'react-native';

export default class Contact extends Component{

    constructor(props){
        super(props);
        const {state} = props.navigation;
    }

    render() {
        return (
            <View style={styles.container }>
                <View style={styles.container1 }>
                    <Text style={styles.text1 }> Votre numéro de téléphone</Text>
                    <TextInput style={styles.input}
                               placeholder="Téléphone"
                    />
                </View>
                <Text style={styles.text1 }> Votre adresse</Text>
                <TextInput style={styles.input}
                           placeholder="Adresse"
                />
                <Text style={styles.text1 }> Votre adresse</Text>
                <TextInput style={styles.input}
                           placeholder="Email"
                />


                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('pdp')} >
                    <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer</Text>
                </TouchableOpacity>
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
        marginVertical: 30,
    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginVertical:20,
    },
    container21: {
        flexDirection: 'row'

    },
    container22: {
        flexDirection: 'row'
    },
    container23: {
        flexDirection: 'row'
    },
    input:{
        width : 340,
        height : 20 ,
        padding : 15 ,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        borderRadius:5,
        marginVertical : 10 ,
        marginLeft : 40 ,
    },
    text1 : {
        fontSize : 25,
        color : '#62A7A9',
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
    text2 : {
        fontSize : 25,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:270,
        marginVertical:5,
        fontWeight: 'bold',
        height:40,
    },
    Checkbox : {
        color : '#fff',
        backgroundColor:'#E7DEDE',
        marginVertical:5,
        width:50,
        height:40,
    },
    ButtonStyle:{
        backgroundColor: '#fff',
        borderColor : '#828788',
        borderWidth:2,
        borderRadius:10,
        height : 50,
        width : 250,
        marginLeft : 80 ,
        paddingLeft : 15,
        paddingTop : 12,
        marginBottom: 10,
        alignItems : 'center',
    },
});