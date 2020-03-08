import React, { Component } from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import * as ImagePicker from "react-native-image-picker";

export default class Description extends Component{

    constructor(props){
        super(props);
        const {state} = props.navigation;
    }
    state = {
        photo: null,
    };
    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    };

    render() {
        const { photo } = this.state;
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
            {photo && (
                <Image
                    source={{ uri: photo.uri }}
                    style={{ width: 300, height: 300 }}
                />
            )}
        </View>

    );
    }
}
