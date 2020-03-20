import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class communication extends React.Component {
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});
