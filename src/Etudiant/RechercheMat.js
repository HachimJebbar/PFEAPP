import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput} from 'react-native';




export default class RecherchePr extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <View style={styles.container}>
                <View style={styles.container0}>
                    <TouchableOpacity >
                        <Text style={styles.text1 }>Quelle matière  </Text>
                        <Text style={styles.text2 }>souhaitez-vous étudier ? </Text>
                    </TouchableOpacity>



                    <TextInput style={styles.input}
                               placeholder="Matière"
                    />
                </View>

                <View style={styles.imagesView}>
                    <View style={styles.container1}>
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Prerequis')} >
                           <Text>Confirmer</Text>
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