import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

export default class Login extends Component {
    state;

    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}> Connexion </Text>


                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Entrer le mot de passe"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <View style={styles.container0}>
                    <View View style={styles.container1}>
                        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                            <Text style={styles.signUpText}>Connexion</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.container2}>
                        <TouchableHighlight style={[styles.buttonContainer, styles.signupFButton]} onPress={() => this.onClickListener('sign_up')}>
                            <Text style={styles.signUpText}>Facebook</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.buttonContainer, styles.signupGButton]} onPress={() => this.onClickListener('sign_up')}>
                            <Text style={styles.signUpText}>Gmail</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:30,
        flexDirection: 'row',
        alignItems:'center',

    },
    inputs:{
        width : 320,
        height : 50 ,
        padding : 15 ,
        borderWidth : 7,
        borderColor : '#F5F1F1',
        marginVertical : 40 ,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#62A7A9",
        marginLeft : '14%' ,
        width : 280,
    },
    signUpText: {
        color: 'white',
    },
    signupFButton: {
        backgroundColor: "#4267B2",
        width : 140,
    },
    signupGButton: {
        backgroundColor: "#DB4437",
        width : 140,
    },
    text: {
        color: '#62A7A9',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom : 50 ,
        marginVertical : 160 ,
        marginLeft : '25%' ,

    },
    container2 : {
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',
        width: '100%'
    },
    container0:{
        flexDirection: 'column'
    },
    container1 : {
        flexDirection: 'row'
    },
});