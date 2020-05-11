import React, { Component } from 'react';
import {View, TextInput, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {db} from '../FireBase/FireBase';



export default class tarif extends Component {
    constructor(props) {
        super(props);
        const {state} = this.props.navigation;

    }
    state = {

        type: this.props.navigation.getParam('data4'),
        description2: this.props.navigation.getParam('data3'),
        description1: this.props.navigation.getParam('data2'),
        langue: this.props.navigation.getParam('data1'),
        tarif: "",
    }

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
                    <Text style={styles.text1 }>Précisez le tarif d'une   </Text>
                    <Text style={styles.text1 }>heure de cours </Text>
                    <View style={styles.container2 }>
                        <TextInput style={styles.input }
                                   placeholder="Tarif"
                                   keyboardType={'numeric'}
                                   onChangeText={data5 => this.setState({tarif: data5})}
                        />
                        <Text style={styles.text2 }>dh/h </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('annonce', {data1:this.state.langue, data2:this.state.description1, data3:this.state.description2, data4:this.state.type, data5:this.state.tarif })} style={styles.ButtonStyle}>
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
        marginVertical: '20%',
    },
    container2: {
        flexDirection: 'row',
    },
    input:{
        width : 270,
        height : 15 ,
        paddingLeft:15,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        marginVertical : '15%',
        marginLeft : 40 ,
    },
    text1 : {
        fontSize : 30,
        color : '#62A7A9',
        marginLeft : 40 ,
        fontWeight: 'bold',

    },
    text2 : {
        fontSize : 20,
        color : '#fff',
        fontWeight: 'bold',
        marginVertical : '15%',
        backgroundColor : '#F5F1F1',
        height : 45 ,
        paddingTop: 5,
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