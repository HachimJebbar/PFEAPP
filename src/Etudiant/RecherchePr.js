import React, { Component } from 'react';
import { ScrollView, Image, Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.container0}>
                        <TouchableOpacity >
                            <Text style={styles.text1 }>Liste des </Text>
                            <Text style={styles.text2 }>Professeurs </Text>
                        </TouchableOpacity>


                    </View>
                    <ScrollView>
                        <Text style={{fontSize:15}}>Scroll me plz</Text>

                        <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
                        <Text style={{fontSize:15}}>If you like</Text>

                        <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
                        <Text style={{fontSize:15}}>Scrolling down</Text>

                        <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
                        <Text style={{fontSize:15}}>What's the best</Text>

                        <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
                        <Text style={{fontSize:15}}>Framework around?</Text>

                        <Text style={{fontSize:15}}>React Native</Text>
                    </ScrollView>


                    <View style={styles.imagesView}>
                        <View style={styles.container1}>
                            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Test')} >
                                <Text>Confirmer</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        flexDirection: 'row'

    },
    container2 : {
        flexDirection: 'row'
    },
    input:{
        width : 340,
        height : 50 ,
        padding : 15 ,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        borderRadius:5,
        marginVertical : 40 ,
        marginLeft : 40 ,
    },
    ImageView1: {
        // justifyContent : 'center',
        // alignItems : 'center',
        width: 100,
        height: 100,
        marginLeft : 40 ,
        marginVertical : 15 ,

    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 40 ,
        marginLeft : 40 ,
    },
    text2 : {
        fontSize : 24,
        color : '#62A7A9',
        marginLeft : 40 ,
    },
    imagesView:{
        flexDirection: 'column',
        alignItems: 'center',
    }
});
