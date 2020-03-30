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
                <Text style={styles.text1 }>Liste des matières populaires : </Text>


                <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>
                    <Text>Anglais</Text>
                    <Text>Français</Text>
                    <Text>Allemand</Text>
                    <Text>Espagnole</Text>
                    <Text>Arabe</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description')}>
                    <Text>Continuer</Text>
                </TouchableOpacity>

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
        marginVertical : 40 ,
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
});
