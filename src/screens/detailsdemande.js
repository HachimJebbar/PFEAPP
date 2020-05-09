import React, { Component } from 'react';
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    CheckBox,
    TouchableHighlight
} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ScrollView>
                        <View style={styles.container1 }>
                            <View style={styles.container2 }>
                            <View style={styles.container21 }>
                                <View style={styles.container212 }>
                                    <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                </View>
                                <View style={styles.container213 }>
                                    <Text style={styles.text3 }>Hachim Jebbar</Text>
                                </View>
                                <View style={styles.container211 }>
                                    <TouchableOpacity style={[styles.buttonContainer, styles.modifier]} onPress={() => this.props.navigation.navigate('detailsdemande')}>
                                        <Text style={styles.text3}>+</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                        </View>
                    </ScrollView>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:  '#fff',
        position : 'relative'
    },
    container1: {
        flexDirection: 'row',
        height : '50%',
        marginVertical:30,

    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginRight:40,
        height: '100%',
        backgroundColor:  '#F5F1F1',

    },
    container21: {
        flexDirection: 'row',
        width : '70%',
        height : '100%' ,

    },
    container211: {
        flexDirection: 'column',
        width : '20%',
        marginLeft:10,
    },
    container212: {
        flexDirection: 'column',
        width : '30%',
    },
    container213: {
        flexDirection: 'column',
        width : '90%',
    },
    ImageView:{
        height: 50,
        borderRadius: 80,
        marginLeft : 15 ,
        width : 50 ,
    },
    text3 : {
        fontSize : 15,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginTop : 15 ,
        fontWeight: 'bold',
        marginLeft : 15 ,
    },

});
