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
                    <Text style={styles.text1 }>Vos informations générales</Text>
                    <TextInput style={styles.input}  placeholder="Nom from database" />
                    <TextInput style={styles.input}  placeholder="Prénom from database" />
                    <TextInput style={styles.input}  placeholder="Sexe from database" />
                    <TextInput style={styles.input}  placeholder="Gmail from database" />
                    <TextInput style={styles.input}  placeholder="Télephone from database" />
                    <TextInput style={styles.input}  placeholder="Skype from database" />
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('pdp')} >
                        <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Valider</Text>
                    </TouchableOpacity>
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
        marginVertical: 30,
    },
    input:{
        width : '80%',
        height : '10%' ,
        padding : 15 ,
        borderWidth : 4,
        borderColor : '#F5F1F1',
        borderRadius:5,
        marginVertical : 10 ,
        marginLeft : 40 ,
    },
    text1 : {
        fontSize : 25,
        color : '#62A7A9',
        fontWeight: 'bold',
        marginVertical : '5%',
        textAlign : 'center',
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
