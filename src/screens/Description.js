<<<<<<< HEAD
import React, { Component } from 'react';
import {View, TextInput, Text, Button} from 'react-native';

=======
import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";
>>>>>>> ec221fb6a8f2134dd1dd7fd5566e542afbfb7fcd

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
<<<<<<< HEAD
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

=======
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <FlatList
                vertical
                numColumns={2}
                data={this.state.data}
                renderItem={({ item: rowData }) => {
                    return (
                        <Card
                            title={null}
                            image={{ uri: rowData.imageUrl }}
                            containerStyle={{ padding: 0, width: 160 , alignItems : 'center'}}

                        >
                            <Text style={{ marginBottom: 10 }}>
                                {rowData.title}
                            </Text>
                        </Card>
                    );
                }}
                keyExtractor={(item, index) => index}
            />
>>>>>>> ec221fb6a8f2134dd1dd7fd5566e542afbfb7fcd
        );
    }
}