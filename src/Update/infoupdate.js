import React, { Component } from 'react';
import {View, TextInput, Text, CheckBox, TouchableOpacity, StyleSheet} from 'react-native';
import {auth, db} from "../FireBase/FireBase";

export default class Infos extends Component{

    constructor(props){
        super(props);
        const {state} = props.navigation;
        this.state={
            nom_complet:'',
            email : '',
            numero : '',
            Data:{},
            userKey:'',
        }
    }
    getData=(Change=(Data,userKey)=>this.setState({Data:Data,nom_complet:Data.nom_complet,email:Data.email,numero:Data.numero,userKey:userKey}))=>{
        let uid =auth.currentUser.uid;
        console.log(uid);
        db.ref("/users").orderByChild("uid").equalTo(uid)
            .once("value",function (snapshot) {
                console.log(snapshot.val());
                snapshot.forEach(function (child) {
                    let userData=child.val();

                    Change(userData,child.key);
                })

            })
    };
    componentDidMount() {
        this.getData();
    }
    onSubmit=()=>{
        let userKey= this.state.userKey;
        let nom_complet = this.state.nom_complet;
        let email = this.state.email ;
        let numero = this.state.numero ;
        db.ref('users/' + userKey).update({
            nom_complet:nom_complet,
            email : email ,
            numero : numero ,
        }).then( r =>this.getData())
    };
    render() {
        return (
            <View style={styles.container }>
                <View style={styles.container1 }>
                    <Text style={styles.text1 }>Vos informations générales</Text>
                    <TextInput style={styles.input}
                               onChangeText={(e)=>this.setState({nom_complet:e})}
                               value={this.state.nom_complet}
                               placeholder="Nom Complet"
                               underlineColorAndroid="transparent"
                               placeholderTextColor="#a9a9a1"
                               autoCapitalize="none" />
                    <TextInput style={styles.input}
                               onChangeText={(e)=>this.setState({numero:e})}
                               value={this.state.numero}
                               placeholder="Telephone"
                               underlineColorAndroid="transparent"
                               placeholderTextColor="#a9a9a1"
                               autoCapitalize="none" />
                    <TextInput style={styles.input}
                               onChangeText={(e)=>this.setState({email:e})}
                               value={this.state.email}
                               placeholder="Gmail"
                               underlineColorAndroid="transparent"
                               placeholderTextColor="#a9a9a1"
                               autoCapitalize="none"/>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.onSubmit()}>
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
        height : '15%' ,
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
