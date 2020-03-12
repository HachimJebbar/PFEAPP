import React, { Component } from 'react';
import {View, TextInput, Text, Button} from 'react-native';


export default class Description extends Component{

    constructor(props){
        super(props);
        const {state} = props.navigation;
    }


    render() {

        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <TextInput
                    placeholder="Description de votre profil"
                />
                <TextInput
                    placeholder="Votre parcours"
                />
                <Button onPress={() => this.props.navigation.navigate('Contact')} title='Continuer'/>

            </View>

        );
    }
}