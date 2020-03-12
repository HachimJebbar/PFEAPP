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
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} >
                            <Image source={require('../../assets/Images/langue.png')} style = {styles.ImageView1} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} >

                            <Image source={require('../../assets/Images/informatique.png')} style = {styles.ImageView1} />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} >

                            <Image source={require('../../assets/Images/dev.jpg')} style = {styles.ImageView1} />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Description')} >

                            <Image source={require('../../assets/Images/langue.png')} style = {styles.ImageView1} />

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
<<<<<<<$$ HEAD
        flexDirection: 'column',
        alignItems: 'center'
=======
        flexDirection: 'column'
>>>>>>> ec221fb6a8f2134dd1dd7fd5566e542afbfb7fcd
    }
});