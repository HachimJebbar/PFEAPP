import React, { Component } from 'react';
import { ScrollView, Image, Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {

    state = {
        description1: this.props.navigation.getParam('text'),
        parcours: this.props.navigation.getParam('text'),
        langue: this.props.navigation.getParam('data1'),
        type: this.props.navigation.getParam('data'),
        tarif : this.props.navigation.getParam('text'),
    };

    render() {
        console.log(this.state.type)
        return (

            <View style={styles.container}>
                <ScrollView>

                    <TouchableOpacity >
                        <Text style={styles.text1 } multine>"Bravo ! Votre annonce est compléte .</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        <View style={styles.container1 }>
                            <View style={styles.container2 }>
                                <View style={styles.container21 }>
                                    <View style={styles.container211 }>
                                        <Text style={styles.text3 }>Hachim Jebbar</Text>
                                        <Text style={styles.text4 } >Matiere   :  Arabe</Text>
                                    </View>
                                    <View style={styles.container212 }>
                                        <Image style={styles.ImageView} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} />
                                    </View>
                                </View>
                                <View style={styles.container22 }>
                                    <Text style={styles.text5 }>{this.state.tarif}DH/H cours</Text>
                                    <Text style={styles.text5 }>{this.state.data}</Text>
                                </View>
                                <View style={styles.container23 }>
                                    <Text style={styles.text6 }>Description de votre parcours</Text>
                                </View>
                                <View style={styles.container23 }>
                                    <Text style={styles.text6 }>Description de votre méthodoligie</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('reviewDetails', {data1:this.state.langue, data2:this.state.description1, data3:this.state.description2})} style={styles.ButtonStyle}>
                                <Text style={{fontSize : 18,color: 'white',fontWeight: 'bold', }}>Valider</Text>
                            </TouchableOpacity>
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
    },
    container1: {
        flexDirection: 'row'
    },
    container2: {
        flexDirection: 'column',
        marginLeft : 40 ,
        marginVertical:20,
        backgroundColor:  '#F5F1F1',
        marginRight:40,
        height: '95%',
    },
    container21: {
        flexDirection: 'row',
        marginVertical : 30 ,
        borderWidth : 5,
        borderColor : '#fff',
        width : '100%',
        height : 180 ,
        borderRadius:50,

    },
    container211: {
        flexDirection: 'column',
        width : '50%',
    },
    container212: {
        flexDirection: 'column',
        width : '45%',
    },
    container22: {
        flexDirection: 'row',
        width : '100%',
    },
    container23: {
        flexDirection: 'row',
        width : '100%',
    },
    ImageView:{
        height: 130,
        borderRadius: 80,
        marginTop : 20,
        marginLeft : 15 ,
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
    text3 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginVertical : 20 ,
        fontWeight: 'bold',
        marginLeft : 10 ,
    },
    text4 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        marginVertical : 20 ,
        fontWeight: 'bold',
        marginLeft : 10 ,
    },
    text5 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:5,
        width : '47%',
        marginHorizontal:5,
        marginLeft : 5 ,
    },
    text6 : {
        fontSize : 19,
        color : '#AFA5A5',
        marginBottom : 10 ,
        fontWeight: 'bold',
        borderWidth : 3,
        borderRadius:20,
        borderColor: '#fff',
        padding:10,
        width : '92%',
        height:'100%',
        marginHorizontal:5,
        marginLeft : 13 ,
    },
    ButtonStyle:{
        backgroundColor: '#62A7A9',
        borderRadius:10,
        height : 50,
        width : 250,
        marginLeft : 80 ,
        paddingLeft : 15,
        paddingTop : 12,
        marginBottom: 10,
        alignItems : 'center',

    },
});
