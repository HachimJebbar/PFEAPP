import React, { Component } from 'react';
import {View, TextInput, Text, CheckBox, TouchableOpacity, StyleSheet, Picker} from 'react-native';
import {auth, db} from "../FireBase/FireBase";
export default class adresseupdate extends Component{

    constructor(props){
        super(props);
        const {state} = props.navigation;
        this.state={
            adresse:'',
            Data:{},
            cities:[],
            cityChosen:'',
            userKey:'',
        }
    }
    getData=(Change=(Data,userKey)=>this.setState({Data:Data,adresse:Data.adresse,cityChosen:Data.ville,userKey:userKey}))=>{
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
        this.getCities()
    }

    getCities=(Change=(Data)=>{this.setState({cities:Data})})=> {
        let ref = db.ref("/cities");
        let query = ref.orderByKey();
        query.once("value", function (snapshot) {
            let Data = snapshot.val();
            Change(Data);
        });
    };
    OnSelectCity=(e)=>{
        this.setState({cityChosen:e})
    };
    onSubmit=()=>{
        let userKey= this.state.userKey;
    let adresse=this.state.adresse;
    let ville= this.state.cityChosen;
    db.ref('users/' + userKey).update({
        adresse: adresse,
        ville: ville,
    }).then( r =>this.getData())
};

render() {
    let keyCity =Object.keys(this.state.cities);
    return (
        <View style={styles.container }>
            <View style={styles.container1 }>
                <Text style={styles.text1 }>Adresse infos</Text>
                <View style={styles.inputContainer}>

                    <Picker style={styles.inputPicker}
                            selectedValue={this.state.cityChosen}
                            onValueChange={e => this.OnSelectCity(e)}
                            mode="dropdown"
                    >

                        {
                            keyCity.map((key)=>{
                                let Data =this.state.cities[key];
                                return(<Picker.Item label={Data.City} value={Data.City}/>
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={styles.inputContainer}>

                    <TextInput style={styles.inputs}
                               onChangeText={(e)=>this.setState({adresse:e})}
                               value={this.state.adresse}
                               placeholder="Adresse"
                               underlineColorAndroid="transparent"
                               placeholderTextColor="#a9a9a1"
                               autoCapitalize="none"/>
                </View>
                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.onSubmit()} >
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
    inputs:{
        width : 320,
        height : 50 ,
        padding : 15 ,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        marginVertical : 40 ,
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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputPicker: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        width:370,
    },
});