import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class musique1 extends React.Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
    }
    callFun = () =>
    {
        alert("Matière choisie!!!");
    };
    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.text1 }>Liste des matières populaires : </Text>

            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Chant'})}>
                    <Text style={styles.text5 }>Chant</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Guitare'})}>
                    <Text style={styles.text5 }>Guitare</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Piano'})}>
                    <Text style={styles.text5 }>Piano</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Batterie'})}>
                    <Text style={styles.text5 }>Batterie</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Violon'})}>
                    <Text style={styles.text5 }>Violon</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Chorale'})}>
                    <Text style={styles.text5 }>Chorale</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Saxophone'})}>
                    <Text style={styles.text5 }>Saxophone</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'El Malhoun'})}>
                    <Text style={styles.text5 }>El Malhoun</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'Flûte'})}>
                    <Text style={styles.text5 }>Flûte</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 50 ,
        marginLeft : 10 ,
        fontWeight: 'bold',
    },
    text5 : {
        fontSize : 20,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:320,
        marginVertical:5,
        fontWeight: 'bold',
        height:30,
        marginLeft: '5%',
        textAlign : 'center',
    },
});
