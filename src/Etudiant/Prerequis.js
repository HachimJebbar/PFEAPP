import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput, Picker} from 'react-native';
import * as firebase from "firebase";
import {auth, db} from "../FireBase/FireBase";
import Modal from "react-native-modal";




export default class RecherchePr extends React.Component {

    constructor(props){
        super(props);
    }
    state  = {
        langue: this.props.navigation.getParam('data1'),
        data: {},
        cities:[],
        cityChosen:'All',
        visible:false,
        cityExist:true,
        annonceExist:true,
        error:'',
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
        this.MatiereDetails();
        this.getCities();
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.setState({ error:''});

        });
    };
    OnSelectCity=(e)=>{
        this.setState({cityChosen:e});
    };
    getCities=(Change=(Data)=>{this.setState({cities:Data})})=> {
        let ref = db.ref("/cities");
        let query = ref.orderByKey();
        query.once("value", function (snapshot) {
            let Data = snapshot.val();
            Change(Data);
        });
    };
    showModal = () => this.setState({visible: true});
    hideModal = () => this.setState({visible: false});
    checkVilleProf=(Change=()=>this.setState({cityExist:false}),Change2=()=>this.setState({annonceExist:false}),
                    Change3=()=>this.setState({cityExist:true}) )=>{
        let cityChosen=this.state.cityChosen;
        db.ref('users').orderByKey()
            .once("value", function (snapshot) {
                if (snapshot.exists()){
                    snapshot.forEach(function (child) {
                        let Data = child.val();
                        if (Data.ville === cityChosen) {
                            Change3();
                            db.ref('Annonces').orderByChild("uid").equalTo(Data.uid)
                                .once("value", function (snapshot) {
                                    if (snapshot.exists()) {
                                        check();
                                        return check();
                                    } else {
                                        Change2();
                                    }
                                })
                        }else {
                            Change()
                        }
                    })
                }
            }).then(r =>{
            if (!this.state.cityExist && !this.state.annonceExist){
                this.setState({error:'Cette ville est hors service pour le moment'})
            }else if (this.state.cityExist && !this.state.annonceExist){
                this.setState({error:'Les annonces ne sont pas disponible pour le moment'})
            }
        });
        const check=()=>{
            this.props.navigation.navigate('RecherchePr', {data1 : this.state.langue,cityChosen:this.state.cityChosen})
        };

    };
     render(){
        //let Nom = this.state.data ;
        //let Prerequis1 = this.state.data ;
        //let Prerequis2 = this.state.data ;
        //let Prerequis3 = this.state.data ;
        let keyCity= Object.keys(this.state.cities);
        return (
            <View style={styles.container}>
                <View style={styles.container0}>

                    <Modal
                        animated
                        animationType="fade"
                        isVisible={this.state.visible}
                        style={styles.modal}
                        onBackdropPress={()=>this.hideModal()}>
                        <Text style={styles.text3 }>Filtrer par ville</Text>
                        <Picker style={styles.inputPicker}
                                selectedValue={this.state.cityChosen}
                                onValueChange={e => this.OnSelectCity(e)}
                                mode="dropdown"
                        >
                            <Picker.Item label="All" value="All"/>
                            {
                                keyCity.map((key)=>{
                                    let Data =this.state.cities[key];
                                    return(<Picker.Item label={Data.City} value={Data.City}/>
                                    )
                                })
                            }
                        </Picker>
                        <View style={styles.container1}>
                            <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => {this.checkVilleProf();this.hideModal()}} >
                                <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer</Text>
                            </TouchableOpacity>

                        </View>
                    </Modal>
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
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.showModal()} >
                        <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.dirannonce }>{this.state.error}</Text>

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
    modal: {
        margin: 0,
        backgroundColor: 'white',
        height: 350,
        flex:0 ,
        bottom: 0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        position: 'absolute',
        width: '100%'
    },
    dirannonce : {
        marginTop : '10%',
        fontSize : 22,
        color : '#AFA5A5',
        fontWeight: 'bold',
        textAlign : 'center',
        alignItems : 'center',
    },
});