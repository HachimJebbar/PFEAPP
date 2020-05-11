import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput} from 'react-native';
import * as firebase from "firebase";




export default class RecherchePr extends React.Component {

    constructor(props){
        super(props);
    }
    state  = {
        langue: this.props.navigation.getParam('data1'),
        data: {},
    };

    MatiereDetails = (Data, Change=()=> this.setState({data:Data})) => {
        let Compare =this.state.langue;
        var ref = firebase.database().ref("Matiere");
        ref.orderByChild("Nom").equalTo(Compare).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                Data = child.val();
                Change();
            })
        });
    };
    componentDidMount() {
        this.MatiereDetails() ;
    };
    render(){
        //let Nom = this.state.data ;
        //let Prerequis1 = this.state.data ;
        //let Prerequis2 = this.state.data ;
        //let Prerequis3 = this.state.data ;
        return (
            <View style={styles.container}>
                <View style={styles.container0}>
                    <TouchableOpacity >
                        <Text style={styles.text1 }>Matière "{this.state.data.Nom}"  </Text>
                        <Text style={styles.text2 } multine>Vous êtes en "nv scolaire" Vous devez disposer
                        des préreques suivantes pour qu'on puisse vous aidez à améliorer votre niveau :</Text>
                        <Text style={styles.text3 }>{this.state.data.Prerequis1}  </Text>
                        <Text style={styles.text3 }>{this.state.data.Prerequis2} </Text>
                        <Text style={styles.text3 }>{this.state.data.Prerequis3} </Text>

                    </TouchableOpacity>

                </View>

                    <View style={styles.container1}>
                        <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('RecherchePr')} >
                            <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer</Text>
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
        flexDirection: 'row'

    },
    container2 : {
        flexDirection: 'row'
    },
    text1 : {
        fontSize : 30,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 40 ,
        fontWeight: 'bold',
        textAlign : 'center',
    },
    text2 : {
        fontSize : 24,
        textAlign : 'center',
        color : '#AFA5A5',
        marginVertical : 15 ,

    },
    text3 : {
        fontSize : 24,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginVertical : 20 ,
        fontWeight: 'bold',
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
        marginVertical:40,
        alignItems : 'center',
    },
});