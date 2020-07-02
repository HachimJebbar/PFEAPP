import React, { Component } from 'react';
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TouchableHighlight, RefreshControl
} from 'react-native';
import Modal from "react-native-modal";

import {auth, db} from "../FireBase/FireBase";
import Infosdemande from "./infosdemande";
export default class detailsdemande extends Component {
    constructor(props) {
        super(props);
        const {state} = props.navigation;
        this.idMatiere=this.props.navigation.getParam('idMatiere');
        this.state = {
            data : [],
            data2 : {},
            refreshing:false,
            visible:false,
            OneStudentData:{}
        };
    }
    GetData=(userData,change=()=>{this.setState({data:userData})}, userData2,change2=()=>{this.setState({data2:userData2})})=>{

        let ref = db.ref("Demandes");
        let user = auth.currentUser.uid;

        ref.orderByChild("uidProf").equalTo(user).once("value",function (snapshot) {
            if (snapshot.exists()){
                userData = snapshot.val();
                change();
            }


        })
    };
    componentDidMount() {
        this.GetData();
    }
    showModal = () => this.setState({visible: true});
    hideModal = () => this.setState({visible: false});
    getOneStudentData=(uidEtudiant,Change=(OneStudentData)=>this.setState({OneStudentData:OneStudentData}))=>{
        let ref = db.ref("users");

        ref.orderByChild("uid").equalTo(uidEtudiant).once("value",function (snapshot) {
            if (snapshot.exists()){
                snapshot.forEach(function (child) {
                    let OneStudentData = child.val();
                    Change(OneStudentData);
                })

            }


        })
    };
    CardList = ({Demandes: {uidProf,uidEtudiant, annonceKey,motif , status,idMatiere }, IdDemande}) => {
        return (
            <View style={styles.container}>
                <Modal
                    animated
                    animationType="fade"
                    isVisible={this.state.visible}
                    style={styles.modal}
                    onBackdropPress={()=>this.hideModal()}>
                    <Text style={styles.text3 }>Nom étudiant : {this.state.OneStudentData.nom_complet}</Text>
                    <Text style={styles.text3 }>Email : {this.state.OneStudentData.email}</Text>
                    <Text style={styles.text3 }>Num :{this.state.OneStudentData.numero}</Text>
                    <Text style={styles.text3 }>Ville : {this.state.OneStudentData.ville}</Text>
                    <Text style={styles.text3 }>Adresse : {this.state.OneStudentData.adresse}</Text>

                </Modal>
                    <ScrollView>
                        {this.idMatiere === idMatiere &&(
                            <View style={styles.container1 }>
                                <View style={styles.container2 }>
                                    <View style={styles.container21 }>
                                        <View style={styles.container212 }>
                                            <Image source={require('../../assets/Images/profil.png')} style={styles.ImageView}/>
                                        </View>
                                        <View style={styles.container213 }>
                                            <Infosdemande style={styles.text3 } uidEtudiant = {uidEtudiant}/>

                                        </View>
                                        <View style={styles.container211 }>
                                            <TouchableOpacity style={[styles.buttonContainer, styles.modifier]} onPress={() => {this.getOneStudentData(uidEtudiant);this.showModal()}}>
                                                <Text style={styles.text3}>+</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                            </View>
                        )}

                </ScrollView>
            </View>
        );
    };
    onRefresh() {
        this.setState({refreshing: false,data:[]});
        this.GetData();
    }
    render() {
        let keys = Object.keys(this.state.data);

        return (

            <View style={styles.container}>
                <ScrollView     refreshControl={
                    <RefreshControl

                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }>

                    {
                        keys.length > 0
                            ? keys.map((key) => {
                                return (

                                    <View  key={key}>
                                        <this.CardList
                                            Demandes={this.state.data[key]}
                                            IdDemande={key}
                                        />
                                    </View>
                                )
                            })
                            : <View ><Text>Pas d'annonces</Text></View>
                    }
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
        position : 'relative'
    },
    container1: {
        flexDirection: 'row',
        height : '50%',
        marginVertical:30,

    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginRight:40,
        height: '100%',
        backgroundColor:  '#F5F1F1',

    },
    container21: {
        flexDirection: 'row',
        width : '70%',
        height : '100%' ,

    },
    container211: {
        flexDirection: 'column',
        width : '20%',
        marginLeft:10,
    },
    container212: {
        flexDirection: 'column',
        width : '30%',
    },
    container213: {
        flexDirection: 'column',
        width : '90%',
    },
    ImageView:{
        height: 50,
        borderRadius: 80,
        marginLeft : 15 ,
        width : 50 ,
    },
    text3 : {
        fontSize : 15,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginTop : 15 ,
        fontWeight: 'bold',
        marginLeft : 15 ,
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

});
