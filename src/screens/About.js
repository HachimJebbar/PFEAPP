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

export default class SignUpView extends Component {
    state;

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email   : '',
            password: '',
            cpassword:'',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}> Devenir Prof </Text>{}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Nom Complet"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(fullName) => this.setState({fullName})}/>
                </View>

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
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Confirmer le mot de passe"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(cpassword) => this.setState({cpassword})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>S'inscrire</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupFButton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Facebook</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupGButton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Gmail</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fffd4',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#E9967A",
    },
    signUpText: {
        color: 'white',
    },
    signupFButton: {
        backgroundColor: "#4267B2",
    },
    signUpFText: {
        color: 'white',
    },
    signupGButton: {
        backgroundColor: "#DB4437",
    },
    signUpGText: {
        color: 'white',
    },
    text: {
        color: '#E9967A',
        fontSize: 20,
        fontWeight: 'bold',


    }
});
