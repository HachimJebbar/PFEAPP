
import React, { Component } from 'react';
import { ScrollView, Image, Text, View, FlatList, TouchableOpacity, StyleSheet , Alert} from 'react-native';
import {auth, db} from "../FireBase/FireBase";
import * as firebase from "firebase";

export default class annonce extends Component {
    constructor(props) {
        super(props);

        const {state} = props.navigation;
        this.state = {
            tarif : this.props.navigation.getParam('data5'),
            type: this.props.navigation.getParam('data4'),
            description2: this.props.navigation.getParam('data3'),
            description1: this.props.navigation.getParam('data2'),
            langue: this.props.navigation.getParam('data1'),
            userData:{}

        };
    }
    getUserData=(Change=(Data)=>this.setState({userData:Data}))=>{
        let uid= auth.currentUser.uid;
        db.ref("users").orderByChild("uid").equalTo(uid)
            .once("value",function (snapshot) {
                snapshot.forEach(function (child) {
                    let Data= child.val();
                    Change(Data);
                })
            })
    };
    componentDidMount() {
        this.getUserData();
    }

    AnnonceAjout=()=> {
      let  tarif = this.state.tarif;
          let  langue = this.state.langue;
           let parcours = this.state.description1;
          let  methodologie = this.state.description2;
          let  cours = this.state.type;
        let ref = db.ref("users");
        let ville = this.state.userData;
        let user = auth.currentUser.uid;

        ref.orderByChild("uid").equalTo(user).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                let key = child.key;
                db.ref('/Annonces').push({
                    uid : user,
                    tarif : tarif,
                    langue : langue,
                    parcours : parcours,
                    methodologie : methodologie,
                    cours : cours,
                });
            })


        }).then(annonce => {
        Alert.alert('Action!', 'Nouvelle annoce');

        }).catch(error => this.setState({ error: error.message }))
    }

    render() {

        
        return (

            <View style={styles.container}>
                <ScrollView>

                    <TouchableOpacity >
                        <Text style={styles.text1 } multine>"Votre annonce sera traité dans les 24h suivantes .</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        <View style={styles.container1 }>
                            <View style={styles.container2 }>
                                <View style={styles.container21 }>
                                    <View style={styles.container211 }>
                                        <Text style={styles.text3 }>Hachim Jebbar</Text>
                                        <Text style={styles.text4 } >Matiere   : {this.state.langue}</Text>
                                    </View>
                                    <View style={styles.container212 }>
                                        <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                    </View>
                                </View>
                                <View style={styles.container22 }>
                                    <Text style={styles.text5 }>{this.state.tarif}DH/H cours</Text>
                                    <Text style={styles.text5 }>{this.state.type}</Text>
                                </View>
                                <View style={styles.container22 }>
                                    <Text style={styles.text5 }>Type Cours: {this.state.type}</Text>

                                </View>
                                <View style={styles.container23 }>
                                    <Text style={styles.text6 }>ex :  {this.state.description1}</Text>
                                </View>
                                <View style={styles.container23 }>
                                    <Text style={styles.text6 }> ex : {this.state.description2}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.AnnonceAjout() } style={styles.ButtonStyle}>
                                <Text style={{fontSize : 18,color: 'white',fontWeight: 'bold', }}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>




                </ScrollView>
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
    container1: {
        flexDirection: 'row'
    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginVertical:20,
        backgroundColor:  '#F5F1F1',
        marginRight:40,
        height: '95%',
    },
    container21: {
        flexDirection: 'row',
        marginVertical : 30 ,
        borderWidth : 5,
        borderColor : '#fff',
        width : '100%',
        height : 180 ,
        borderRadius:50,

    },
    container211: {
        flexDirection: 'column',
        width : '50%',
    },
    container212: {
        flexDirection: 'column',
        width : '45%',
    },
    container22: {
        flexDirection: 'row',
        width : '100%',
    },
    container23: {
        flexDirection: 'row',
        width : '100%',
    },
    ImageView:{
        height: 130,
        borderRadius: 80,
        marginTop : 20,
        marginLeft : 15 ,
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
    text3 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginVertical : 20 ,
        fontWeight: 'bold',
        marginLeft : 10 ,
    },
    text4 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginVertical : 20 ,
        fontWeight: 'bold',
        marginLeft : 10 ,
    },
    text5 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:5,
        width : '47%',
        marginHorizontal:5,
        marginLeft : 5 ,
    },
    text6 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:10,
        width : '92%',
        height:'100%',
        marginHorizontal:5,
        marginLeft : 13 ,
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
        alignItems : 'center',

    },
});
