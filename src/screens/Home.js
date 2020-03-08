import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput} from 'react-native';




export default class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        let datause = 'ziad';
         return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ButtonStyle}>
                <Text style={{textAlign : 'center'}}>Quelle matière souhaitez-vous enseigner ? </Text>
            </TouchableOpacity>



                <TextInput style={styles.ButtonStyle}
                           placeholder="Liste des matières"
                           />
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} title='GoTest'>
                <Image source={require('../../assets/Images/langue.png')} style = {styles.ImageView} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} title='GoTest'>

                <Image source={require('../../assets/Images/informatique.png')} style = {styles.ImageView} />

            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} title='GoTest'>

                <Image source={require('../../assets/Images/dev.jpg')} style = {styles.ImageView} />

            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Description')} title='GoTest'>

                <Image source={require('../../assets/Images/langue.png')} style = {styles.ImageView} />

            </TouchableOpacity>



        </View>
    );
    }

   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonStyle:{
        backgroundColor: 'gray',
        borderRadius:5,
        height : 50,
        width : 100,


    },
    ImageView: {
        width: 50,
        height: 50


    }
});
