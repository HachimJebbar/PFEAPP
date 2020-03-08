import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

export default class Contact extends Component{

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
                <Text> Votre adresse</Text>
                <TextInput
                    placeholder="Adresse"
                />
                <Text> Votre numéro de téléphone</Text>
                <TextInput
                    placeholder="Numéro de téléphone"
                />
            </View>
        );
    }
}
