import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput} from 'react-native';




export default class HomeProf extends React.Component {

    constructor(props){
        super(props);
    }


    render(){

        return (
            <View style={styles.container}>
                <View style={styles.container0}>
                    <TouchableOpacity >
                        <Text style={styles.text1 }>Quelle matière  </Text>
                        <Text style={styles.text2 }>souhaitez-vous enseigner ? </Text>
                    </TouchableOpacity>



                    <TextInput style={styles.input}
                               placeholder="Liste des matières"
                    />
                </View>

                <View style={styles.imagesView}>
                    <View style={styles.container1}>
                        <View style={styles.container11}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('communication1')} >
                                <Image source={require('../../assets/Images/communication.png')} style = {styles.ImageView1} />
                                <Text style={styles.text5 }>Communication</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container12}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('musique1')} >
                                <Image source={require('../../assets/Images/music.png')} style = {styles.ImageView2} />
                                <Text style={styles.text5 }>Musique</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.container21}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('dev1')} >
                                <Image source={require('../../assets/Images/dev.png')} style = {styles.ImageView3} />
                                <Text style={styles.text5 }>Developpement</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container22}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('langues1')} >
                                <Image source={require('../../assets/Images/langue.png')} style = {styles.ImageView4} />
                                <Text style={styles.text5 }>Langue</Text>
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
        backgroundColor: '#fff',
    },
    container1: {
        flexDirection: 'row',
        width : '100%',
        height : '20%',
    },
    container11: {
        width : '40%',
        height : '100%',
    },
    container12: {
        width : '40%',
        height : '100%',
        marginLeft: '10%',
    },
    container2 : {
        flexDirection: 'row',
        width : '100%',
        height : '20%',
    },
    container21: {
        width : '40%',
        height : '100%',

    },
    container22: {
        width : '40%',
        height : '100%',
        marginLeft: '10%',
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
        width: '75%',
        height: '100%',
        marginLeft : '13%' ,
    },
    ImageView2: {
        width: '75%',
        height: '100%',
        marginLeft : 20 ,
    },
    ImageView3: {
        width: '75%',
        height: '60%',
        marginLeft : '13%' ,
        marginTop : '70%',
    },
    ImageView4: {
        width: '75%',
        height: '60%',
        marginLeft : 20 ,
        marginTop : '70%',
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 40 ,
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
    text2 : {
        fontSize : 24,
        color : '#62A7A9',
        marginLeft : 40 ,
        fontWeight: 'bold',

    },
    imagesView:{
        flexDirection: 'column',
        marginLeft : '10%',
    },
    text5 : {
        fontSize : 20,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:'100%',
        marginVertical:5,
        fontWeight: 'bold',
        height:30,
        textAlign : 'center',
    },
});