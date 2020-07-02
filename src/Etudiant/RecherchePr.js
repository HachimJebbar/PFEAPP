import React, { Component}  from 'react';
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    CheckBox, Alert,
    TouchableHighlight, RefreshControl, Picker
} from 'react-native';
import CityFilter from "../screens/CityFilter";
import {auth, db} from "../FireBase/FireBase";
import Prof from "./Prof";
import AnnonceImages from "../screens/annonceImages";
export default class RecherchePr extends Component {
    constructor(props) {
        super(props);


        const {state} = props.navigation;
        this.state = {
            Annonces:[],
            langue: this.props.navigation.getParam('data1'),
            data : [],
            data2 : {},
            refreshing:false,
            isProf:false,
            isAnnonce:false,
            cities:[],
            cityChosen:this.props.navigation.getParam('cityChosen'),

        };
    }
    GetData=(Change=(Data)=>this.setState({Annonces:Data}))=>{
        let path = this.state.langue;
        db.ref( 'Annonces').orderByChild("langue").equalTo(path).once("value", function (snapshot) {
            if (snapshot.exists()){
                let Data = snapshot.val();
                Change(Data);
            }

        });
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
            const isProf=()=>{this.setState(
                {isProf:true,
                    }
            )};
            const isAnnonce=()=>{this.setState(
                {
                    isAnnonce:true,}
            )};

        }
    };
    getCities=(Change=(Data)=>{this.setState({cities:Data})})=> {
        let ref = db.ref("/cities");
        let query = ref.orderByKey();
        query.once("value", function (snapshot) {
            let Data = snapshot.val();
            Change(Data);
        });
    };
    OnSelectCity=(e)=>{
        this.setState({cityChosen:e,Test:true});
    };

    componentDidMount() {
        this.getCities();
        this.GetData();
    }
    updateAnnonce=(key,active)=>{
        db.ref('Annonces/' + key).update({
            active: !active,
        }).then(r  =>this.GetData());
    };

    onRefresh() {
        this.setState({refreshing: false,data:[]});
        this.GetData();
    }
    render() {
        let keys = Object.keys(this.state.Annonces);
        let keyCity= Object.keys(this.state.cities);
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
                                let Data= this.state.Annonces[key];
                                if (this.state.cityChosen === "All"){
                                    return(
                                            <View style={styles.container1 }>
                                                <TouchableOpacity onPress={()=>this.updateAnnonce(key, Data.active)}>
                                                    <ScrollView>
                                                        <View style={styles.container1 }>
                                                            <View style={styles.container2 }>
                                                                <View style={styles.container21 }>
                                                                    <View style={styles.container211 }>
                                                                        <Prof style={styles.text3 } uid = {Data.uid}/>
                                                                    </View>
                                                                    <View style={styles.container212 }>
                                                                        <AnnonceImages uid={Data.uid} />
                                                                    </View>
                                                                </View>
                                                                <View style={styles.container22 }>
                                                                    <Text style={styles.adresse }>Tarif :{Data.tarif} DH</Text>
                                                                    <Text style={styles.adresse }>Cours :{Data.cours}</Text>
                                                                </View>
                                                                <View style={styles.container23 }>
                                                                    <Text style={styles.text3 } multiline>Parcours :{Data.parcours}</Text>
                                                                </View>
                                                                <View style={styles.container23 }>
                                                                    <Text style={styles.text3 } multiline>Methodologie {Data.methodologie}</Text>
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
                                                                            { text: "OK", onPress: () => this.onSubmitDemande(Data.uid,key,Data.langue) }
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
                                }else if (this.state.cityChosen !== "All") {
                                    return (
                                        <View>
                                            <CityFilter IdAnnonces={key} cityChosen={this.state.cityChosen} uid={Data.uid}/>
                                        </View>
                                    )
                                }

                            })
                            : <View><Text style={styles.dirannonce }>Aucun Professeur n'existe dans cette ville</Text></View>
                    }
                </ScrollView>
            </View>
        );
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