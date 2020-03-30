import React, { Component } from 'react';
import {View, TextInput, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {db} from '../FireBase/FireBase';



export default class App extends Component {
    constructor(props) {
        super(props);
        const {state} = props.navigation;
    }
    state = {
        description1: "",
        description2: "",
        langue: this.props.navigation.getParam('data1')
    };

//     onSubmit() {
//     db.ref('/descriptions').push({
//         description1: this.state.description1,
//         description2: this.state.description2,
//                           });
//     Alert.alert('Action!', 'Done');
//     this.setState({
//         description1: "",
//         description2: "",
//                   });
// }
    render() {

        return (
            <View style={styles.container }>
                <View style={styles.container1 }>
                    <Text style={styles.text1 }>Description  </Text>
                    <Text style={styles.text1 }>de votre profil </Text>
                <TextInput style={styles.input } multiline
                    placeholder="ex : Etudiant en école d'ingénieur donne cours de maths et physique du collége au lycée
                    à Rabat 'ou' Pianiste concertiste 15ans d'expérience donne cours de pia,o et solfége à domicile"
                           onChangeText={text => this.setState({description1: text})}
                />
                </View>
                <View>
                    <Text style={styles.text1 }>Description  </Text>
                    <Text style={styles.text1 }>de votre parcours</Text>
                <TextInput  style={styles.input } multiline
                    placeholder="ex : Je suis ingénieur(e) / étudiant(e) / musicien(ne) .... je donne des cours depuis
                    ..... je suis diplomé(e)"
                           onChangeText={text => this.setState({description2: text})}
                />
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact', {data1:this.state.langue, data2:this.state.description1, data3:this.state.description2})} style={styles.ButtonStyle}>
                        <Text style={{fontSize : 18,color: 'white' }}>Continuer</Text>
                    </TouchableOpacity>
                </View>
            </View>
             )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        marginVertical: 35,
    },
    input:{
        width : 340,
        height : 120 ,
        padding : 15 ,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        borderRadius:5,
        marginVertical : 10 ,
        marginLeft : 40 ,
    },
    text1 : {
        fontSize : 30,
        color : '#62A7A9',
        marginLeft : 40 ,
        fontWeight: 'bold',
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
