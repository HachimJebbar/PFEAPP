import React, { Component } from 'react';
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    CheckBox,
    TouchableHighlight, RefreshControl
} from 'react-native';
import {auth, db} from "../FireBase/FireBase";

export default class Demandes extends Component {
    constructor(props) {
        super(props);


        const {state} = props.navigation;
        this.state = {
            data : [],
            data2 : {},
            refreshing:false
        };
    }
    GetData=(userData,change=()=>{this.setState({data:userData})}, userData2,change2=()=>{this.setState({data2:userData2})})=>{

        let ref = db.ref("Annonces");
        let user = auth.currentUser.uid;

        ref.orderByChild("uid").equalTo(user).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                userData = snapshot.val();
                change();
            })
        })
    };
    componentDidMount() {

        this.GetData();
    }

    CardList = ({Annonces: {uid,cours, langue, methodologie, parcours,tarif,active}, IdAnnonces}) => {
        return (
            <View style={styles.container}>
                <ScrollView>
                            <View style={styles.container2 }>
                                <View style={styles.container21 }>
                                    <View style={styles.container212 }>
                                        <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                        <Text style={styles.text3 }>{langue}</Text>
                                    </View>
                                    <View style={styles.container211 }>

                                        <TouchableOpacity style={[styles.buttonContainer, styles.modifier]} onPress={() => this.props.navigation.navigate('detailsdemande',{
                                            idMatiere:langue,
                                        })}>
                                            <Text style={styles.text5}>Afficher les demandes</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                </ScrollView>
            </View>
        );
    }

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
                                            Annonces={this.state.data[key]}
                                            IdAnnonces={key}
                                        />
                                    </View>
                                )
                            })
                            : <View ><Text style={styles.dirannonce }>Vous n'avez reçu aucune demande</Text></View>
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
    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginVertical:20,
        backgroundColor:  '#F5F1F1',
        marginRight:40,
        height: '70%',
    },
    container21: {
        flexDirection: 'row',
        marginVertical : '5%' ,
        width : '70%',
        height : '100%' ,
        borderRadius:50,
    },
    container211: {
        flexDirection: 'column',
        width : '70%',
        marginLeft:100,
    },
    container212: {
        flexDirection: 'column',
        width : '35%',
    },
    ImageView:{
        height: 70,
        borderRadius: 80,
        marginLeft : 15 ,
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
        fontSize : 15,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginTop : 15 ,
        fontWeight: 'bold',
        marginLeft : 15 ,
    },
    text5 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:11,
        width : '80%',
        marginHorizontal:5,
        marginLeft : 5 ,
        marginTop: 20,
    },
    text2 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginVertical:3,
        fontWeight: 'bold',
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
