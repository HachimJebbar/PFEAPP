import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert, Animated
} from 'react-native';
import {auth, db} from "../FireBase/FireBase";
import * as yup from "yup";
import { Formik } from 'formik';
import {ScrollView} from "react-native-web";


export default class Inscription extends Component {


    constructor(props){
        super(props);
        this.state = {
            scroll: new Animated.Value(0),
            modalVisible: false,
            error:null,
            Data:{},
            secureTextEntryFirst:true,
            showFirst:'show',
            secureTextEntrySecond:true,
            showSecond:'show',

        };
    }
    signUpUser = (values, props) => {
        console.log(values);
        props = this.props;
        if (values.password === values.repeatpassword){
            auth.createUserWithEmailAndPassword(values.email, values.password).then(user => {
                db.ref('/users').push({
                    uid: user.user.uid,
                    email: values.email,
                    nom_complet: '',
                });
                Alert.alert('Action!', 'Your account is set');
            }).catch(error => this.setState({ error: error.message }))
        }else {
            this.setState({ error: 'Password match' })
        }

    };



    render() {
        const Check = yup.object({
            nom_complet: yup.string().required().max(40).min(8),
            email: yup.string().required().email(),
            password: yup.string().required().max(40).min(8),
            repeatpassword: yup.string().required().max(40).min(8),
        });
        const secureTextEntryFirst = () => {
            if (this.state.secureTextEntryFirst) {
                this.setState({secureTextEntryFirst: false, showFirst: 'hide'})
            }
            if (!this.state.secureTextEntryFirst) {
                this.setState({secureTextEntryFirst: true, showFirst: 'show'})
            }
        };
        const secureTextEntrySecond = () => {
            if (this.state.secureTextEntrySecond) {
                this.setState({secureTextEntrySecond: false, showSecond: 'hide'})
            }
            if (!this.state.secureTextEntrySecond) {
                this.setState({secureTextEntrySecond: true, showSecond: 'show'})
            }
        };
        return (

            <View style={styles.container}>


                <Formik
                    initialValues={{
                        nom_complet: '',
                        email: '',
                        password: '',
                        repeatpassword: '',

                    }}
                    validationSchema={Check}
                    onSubmit={(values) => {
                        this.signUpUser(values);
                    }}>

                    {(props) => (

                        <View style={styles.inputView}>
                            <Text style={styles.text}> Inscrivez-Vous </Text>
                            <Text>{this.state.error}</Text>
                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                           onChangeText={props.handleChange('nom_complet')}
                                           value={props.values.nom_complet}
                                           onBlur={props.handleBlur('nom_complet')}
                                           placeholder="Nom Complet"
                                           underlineColorAndroid="transparent"
                                           placeholderTextColor="#a9a9a1"
                                           autoCapitalize="none"/>
                            </View>
                            <Text style={styles.errorText}>{props.touched.nom_complet && props.errors.nom_complet}</Text>
                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                           onChangeText={props.handleChange('email')}
                                           value={props.values.email}
                                           onBlur={props.handleBlur('email')}
                                           placeholder="Email address"
                                           underlineColorAndroid="transparent"
                                           placeholderTextColor="#a9a9a1"
                                           autoCapitalize="none"
                                />
                                <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                            </View>

                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                           onChangeText={props.handleChange('password')}
                                           value={props.values.password}
                                           onBlur={props.handleBlur('password')}
                                           secureTextEntry={this.state.secureTextEntryFirst}
                                           placeholder="Password"
                                           underlineColorAndroid="transparent"
                                           placeholderTextColor="#a9a9a1"
                                           autoCapitalize="none"/>
                                <Text onPress={() => secureTextEntryFirst()}
                                      style={styles.PasswordIcon}>{this.state.showFirst}</Text>
                            </View>

                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                            <View style={styles.inputContainer}>

                                <TextInput style={styles.inputs}
                                           onChangeText={props.handleChange('repeatpassword')}
                                           value={props.values.repeatpassword}
                                           onBlur={props.handleBlur('repeatpassword')}
                                           secureTextEntry={this.state.secureTextEntrySecond}
                                           placeholder="Repeat Password"
                                           underlineColorAndroid="transparent"
                                           placeholderTextColor="#a9a9a1"
                                           autoCapitalize="none"
                                />
                                <Text onPress={() => secureTextEntrySecond()}
                                      style={styles.PasswordIcon}>{this.state.showSecond}</Text>
                            </View>
                            <Text
                                style={styles.errorText}>{props.touched.repeatpassword && props.errors.repeatpassword}</Text>

                            <View style={styles.container0}>
                                <View View style={styles.container1}>
                                    <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
                                                        onPress={props.handleSubmit}>
                                        <Text style={styles.signUpText}>S'inscrire</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </View>


                    )

                    }
                </Formik>


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
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputView:{
        marginTop:100,
        marginLeft:30
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
