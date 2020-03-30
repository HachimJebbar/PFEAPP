import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
                <Text>Liste des matières populaires : </Text>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Anglais'})}>
                    <Text>Anglais</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Espagnole'})}>
                    <Text>Espagnole</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'Arabe'})}>
                    <Text>Arabe</Text>
                </TouchableOpacity>


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
});
