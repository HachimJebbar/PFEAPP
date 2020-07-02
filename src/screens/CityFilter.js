import React,{Component} from "react";
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Prof from "../Etudiant/Prof";
import AnnonceImages from "./annonceImages";
import {auth, db} from "../FireBase/FireBase";
import isEmpty from "react-native-web/dist/vendor/react-native/isEmpty";
export default class CityFilter extends Component{
    constructor(props){
        super(props);
        this.IdAnnonces=this.props.IdAnnonces;
        this.cityChosen=this.props.cityChosen;
        this.uid=this.props.uid;
        this.state={
            IdAnnonces:this.props.IdAnnonces,
            cityChosen:this.props.cityChosen,
            uid:this.props.uid,
            Annonces:{},
            data : [],
            data2 : {},
            isProf:false,
            isAnnonce:false,
        }
    }
    componentDidMount() {
        this.getDataPost();
    }
    getDataPost=(Change=(Annonces)=>this.setState({Annonces:Annonces}))=>{
        console.log(this.props.cityChosen,'this.props.cityChosen');
        let city= this.props.cityChosen;
        let key=this.props.IdAnnonces;
        db.ref("users").orderByChild("uid").equalTo(this.uid)
            .once("value",function (snapshot) {
                snapshot.forEach(function (child) {
                    let userData=child.val();
                    if (userData.ville === city){
                        db.ref("Annonces").orderByKey().equalTo(key)
                            .once("value",function (snapshot) {
                                if (snapshot.exists()){
                                    snapshot.forEach(function (child) {
                                        let postData=child.val();
                                        Change(postData);
                                    })
                                }

                            })
                    }
                })

            })
    };


    updateAnnonce=(key,active)=>{
        db.ref('Annonces/' + key).update({
            active: !active,
        }).then(r  =>this.GetData());
    };
    onSubmitDemande=(uid,annonceKey,langue)=>{
        let uidConnected=auth.currentUser.uid;
        if (uid===uidConnected){
            alert('Vous ne pouvez pas envoyer une demande à vous même');
        }else {
            db.ref("Demandes").orderByChild("uidEtudiant").equalTo(uidConnected)
                .once("value", function (snapshot) {
                    if (snapshot.exists()){
                        snapshot.forEach(function (child) {
                            let data = child.val();
                            if (data.annonceKey === annonceKey) {
                                isAnnonce()
                            }
                        })
                    }

                }).then (r =>{
                if (this.state.isAnnonce){
                    alert('Vous ne pouvez pas envoyer plusieurs demande au même professeur')
                }else {
                    db.ref("Demandes").push({
                        uidProf:uid,
                        uidEtudiant:uidConnected,
                        annonceKey:annonceKey,
                        status:false,
                        motif:"",
                        idMatiere:langue,
                    })
                }

            });

            const isAnnonce=()=>{this.setState(
                {
                    isAnnonce:true,}
            )};

        }
    };
    render() {


        return(
            <View style={styles.container1 }>
                {
                    Object.keys(this.state.Annonces).length !== 0 &&(
                        <View style={styles.container1 }>
                            <TouchableOpacity onPress={()=>this.updateAnnonce(this.props.IdAnnonces, this.state.Annonces.active)}>
                                <ScrollView>
                                    <View style={styles.container1 }>
                                        <View style={styles.container2 }>
                                            <View style={styles.container21 }>
                                                <View style={styles.container211 }>
                                                    <Prof style={styles.text3 } uid = {this.props.uid}/>
                                                </View>
                                                <View style={styles.container212 }>
                                                    <AnnonceImages uid={this.props.uid} />
                                                </View>
                                            </View>
                                            <View style={styles.container22 }>
                                                <Text style={styles.adresse }>Tarif :{this.state.Annonces.tarif} DH</Text>
                                                <Text style={styles.adresse }>Cours :{this.state.Annonces.cours}</Text>
                                            </View>
                                            <View style={styles.container23 }>
                                                <Text style={styles.text3 } multiline>Parcours :{this.state.Annonces.parcours}</Text>
                                            </View>
                                            <View style={styles.container23 }>
                                                <Text style={styles.text3 } multiline>Methodologie {this.state.Annonces.methodologie}</Text>
                                            </View>
                                            <View style={styles.container23 }>
                                                <TouchableOpacity onPress={()=> {Alert.alert(
                                                    "Alert",
                                                    "Confirmer",
                                                    [
                                                        {
                                                            text: "Annuler",
                                                            onPress: () => console.log("Cancel Pressed"),
                                                            style: "cancel"
                                                        },
                                                        { text: "OK", onPress: () => this.onSubmitDemande(this.state.uid,this.state.IdAnnonces,this.state.Annonces.langue) }
                                                    ],
                                                    { cancelable: false }
                                                );}} style={styles.ButtonStyle}>
                                                    <Text style={{fontSize : 18,color: 'white',fontWeight: 'bold', }}>Faire une demande</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:  '#fff',
        position : 'relative',
        marginBottom : '10%',
    },
    container2: {
        flexDirection: 'column',
        backgroundColor:  '#F5F1F1',
    },
    container21: {
        marginLeft : 30 ,
        marginVertical:20,
        marginBottom : 15 ,
        backgroundColor:  '#F5F1F1',
        width : '90%',
    },
    container211: {
        flexDirection: 'column',
        width : '60%',
        marginLeft:'20%',
    },
    container22: {
        flexDirection: 'column',
        width : '60%',
        marginLeft:'25%',
    },
    ImageView:{
        height: 150,
        marginLeft : '20%' ,
        flexDirection: 'column',
        width : '50%',
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        fontWeight: 'bold',
        marginBottom : 10 ,
        marginVertical : 40 ,
        marginLeft : 40 ,
    },
    text3 : {
        flexDirection : 'row',
        marginLeft : 20 ,
        fontSize : 19,
        color : '#AFA5A5',
        fontWeight: 'bold',
    },
    adresse : {
        flexDirection : 'row',
        fontSize : 19,
        color : '#AFA5A5',
        fontWeight: 'bold',
        width : '100%'
    } ,
    text2 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginVertical:3,
        fontWeight: 'bold',
    },
    ButtonStyle:{
        backgroundColor: '#E4D8D8',
        borderColor : '#E4D8D8',
        borderWidth:2,
        borderRadius:20,
        width : '100%',
        marginTop : '5%',
        textAlign : 'center',
        alignItems : 'center',
    },
    dirannonce : {
        marginTop : '50%',
        fontSize : 30,
        color : '#AFA5A5',
        fontWeight: 'bold',
        textAlign : 'center',
        alignItems : 'center',
    },
});