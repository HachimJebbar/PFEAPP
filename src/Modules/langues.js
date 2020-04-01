import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class langues extends React.Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Anglais'})}>
                        <Text style={styles.text5 }>Anglais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Allemand'})}>
                        <Text style={styles.text5 }>Allemand</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Espagnole'})}>
                        <Text style={styles.text5 }>Espagnole</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Arabe'})}>
                        <Text style={styles.text5 }>Arabe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Français'})}>
                        <Text style={styles.text5 }>Français</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Japonnais'})}>
                        <Text style={styles.text5 }>Japonnais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Italien'})}>
                        <Text style={styles.text5 }>Italien</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Chinois'})}>
                        <Text style={styles.text5 }>Chinois</Text>
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
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 50 ,
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
    text5 : {
        fontSize : 20,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:'80%',
        marginVertical:5,
        fontWeight: 'bold',
        height:30,
        marginLeft: '10%',
        textAlign : 'center',
    },
});
