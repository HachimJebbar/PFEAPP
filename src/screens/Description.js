import React, { Component } from 'react';
import {View, TextInput, Text, Button} from 'react-native';


const data = [
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something two"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something three"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something four"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something five"
    },
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something six"
    }
];

export default class App extends Component {
    constructor(props) {
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
             )
    }
}
