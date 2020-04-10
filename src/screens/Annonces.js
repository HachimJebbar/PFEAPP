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

                    <TouchableOpacity >
                        <Text style={styles.text1 } multine>Mes Annonces</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        <View style={styles.container1 }>
                            <View style={styles.container2 }>
                                <View style={styles.container21 }>
                                    <View style={styles.container212 }>
                                        <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                        <Text style={styles.text3 }multine>100DH/H Matiere</Text>
                                    </View>
                                    <View style={styles.container211 }>
                                        <View style={{flexDirection:'row'} }>
                                        <CheckBox style={{ iconSize:'large'}}

                                        />
                                        <Text style={styles.text2 } >Publier</Text>
                                        </View>
                                        <TouchableHighlight style={[styles.buttonContainer, styles.modifier]} onPress={() => this.onClickListener('sign_up')}>
                                            <Text style={styles.text5}>Modifier</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container1 }>
                            <View style={styles.container2 }>
                                <View style={styles.container21 }>
                                    <View style={styles.container212 }>
                                        <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                        <Text style={styles.text3 }multine>100DH/H Matiere</Text>
                                    </View>
                                    <View style={styles.container211 }>
                                        <View style={{flexDirection:'row'} }>
                                            <CheckBox style={{ iconSize:'large'}}

                                            />
                                            <Text style={styles.text2 } >Publier</Text>
                                        </View>
                                        <TouchableHighlight style={[styles.buttonContainer, styles.modifier]} onPress={() => this.onClickListener('sign_up')}>
                                            <Text style={styles.text5}>Modifier</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('HomeProf') } >
                        <Text style={{fontWeight: 'bold',fontSize : 50,color: '#fff' }}>+</Text>
                    </TouchableOpacity>

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
    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginVertical:20,
        backgroundColor:  '#F5F1F1',
        marginRight:40,
        height: '70%',
    },
    container21: {
        flexDirection: 'row',
        marginVertical : '5%' ,
        width : '70%',
        height : '100%' ,
        borderRadius:50,
    },
    container211: {
        flexDirection: 'column',
        width : '70%',
        marginLeft:100,
    },
    container212: {
        flexDirection: 'column',
        width : '35%',
    },
    ImageView:{
        height: 70,
        borderRadius: 80,
        marginLeft : 15 ,
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        fontWeight: 'bold',
        marginBottom : 10 ,
        marginVertical : 40 ,
        marginLeft : 40 ,
    },
    text3 : {
        fontSize : 15,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginTop : 15 ,
        fontWeight: 'bold',
        marginLeft : 15 ,
    },
    text5 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:11,
        width : '60%',
        marginHorizontal:5,
        marginLeft : 5 ,
        marginTop: 20,
    },
    text2 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginVertical:3,
        fontWeight: 'bold',
    },
    ButtonStyle:{
        backgroundColor: '#E4D8D8',
        borderColor : '#E4D8D8',
        borderWidth:2,
        borderRadius:200,
        height : '13%',
        width : '18%',
        marginLeft : '76%' ,
        marginTop : '5%',
        textAlign : 'center',
        alignItems : 'center',

    },
});
