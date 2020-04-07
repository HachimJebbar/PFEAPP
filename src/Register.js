import React from 'react'
import {
    Text,
    View,
    Animated,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    Picker
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SocialIcon } from 'react-native-elements'
import {auth, db} from '../src/FireBase/FireBase'
import { Formik } from 'formik';
import * as yup from 'yup';


export default class Register extends React.Component{
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


    render(){
        const Check = yup.object({
            nom_complet: yup.string().required().max(40).min(20),
            email: yup.string().required().email(),
            password: yup.string().required().max(40).min(8),
            repeatpassword: yup.string().required().max(40).min(8),
        });
        const secureTextEntryFirst=()=>{
            if (this.state.secureTextEntryFirst){
                this.setState({secureTextEntryFirst:false, showFirst:'hide'})
            }if (!this.state.secureTextEntryFirst){
                this.setState({secureTextEntryFirst:true, showFirst:'show'})
            }
        };
        const secureTextEntrySecond=()=>{
            if (this.state.secureTextEntrySecond){
                this.setState({secureTextEntrySecond:false, showSecond:'hide'})
            }if (!this.state.secureTextEntrySecond){
                this.setState({secureTextEntrySecond:true, showSecond:'show'})
            }
        };
        return (
            <View style={styles.container}>

                <Image style={styles.imageAuth} source={require('../assets/Images/profil.png')} />
                <Formik
                    initialValues={{
                        nom_complet:'',
                        email:'',
                        password : '',
                        repeatpassword:'',

                    }}
                  validationSchema={Check}
                    onSubmit={(values) =>{
                        this.signUpUser(values);
                    }}>
                    {(props)=>(
                        <View style={styles.inputs}>
                            <Text>{this.state.error}</Text>
                            <View style={styles.inputContainer}>
                                <Icon style={styles.searchIcon} name="user" size={20} color="#000"/>
                                <TextInput
                                    onChangeText={props.handleChange('nom_complet')}
                                    value={props.values.nom_complet}
                                    onBlur={props.handleBlur('nom_complet')}
                                    style={styles.input}
                                    placeholder="Username"
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#a9a9a1"
                                    autoCapitalize = "none"
                                />
                            </View>
                            <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>
                            <View style={styles.inputContainer}>
                                <Icon style={styles.searchIcon} name="envelope" size={20} color="#000"/>
                                <TextInput
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                    onBlur={props.handleBlur('email')}
                                    style={styles.input}
                                    placeholder="Email address"
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#a9a9a1"
                                    autoCapitalize = "none"
                                />


                            </View>
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                            <View style={styles.inputContainer}>
                                <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                                <TextInput
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                    style={styles.input}
                                    secureTextEntry={this.state.secureTextEntryFirst}
                                    placeholder="Password"
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#a9a9a1"
                                    autoCapitalize = "none"
                                />
                                <Text onPress={()=>secureTextEntryFirst()} style={styles.PasswordIcon}>{this.state.showFirst}</Text>

                            </View>
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                            <View style={styles.inputContainer}>
                                <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                                <TextInput
                                    onChangeText={props.handleChange('repeatpassword')}
                                    value={props.values.repeatpassword}
                                    onBlur={props.handleBlur('repeatpassword')}
                                    style={styles.input}
                                    secureTextEntry={this.state.secureTextEntrySecond}
                                    placeholder="Repeat Password"
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#a9a9a1"
                                    autoCapitalize = "none"
                                />
                                <Text onPress={()=>secureTextEntrySecond()} style={styles.PasswordIcon}>{this.state.showSecond}</Text>
                            </View>
                            <Text style={styles.errorText}>{props.touched.repeatpassword && props.errors.repeatpassword}</Text>

                            <View style={styles.loginAndRegister}>
                                <TouchableOpacity style={styles.buttonSubmit} onPress={props.handleSubmit}>
                                    <Text style={styles.buttonSubmitText}>Register</Text>
                                </TouchableOpacity >
                                <Text style={styles.registerHere} onPress={() => this.props.CloseModal()}>Sign in here</Text>
                            </View>
                        </View>
                    )}
                </Formik>



            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:'100%',
        width:'100%',

    },
    input: {
        height: 40,
        fontSize: 16,
    },
    inputs: {
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
    },
    searchIcon: {
        padding: 8,
    },
    PasswordIcon:{
        position:'absolute',
        padding: 8,
        marginLeft:300,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        marginBottom: 20,
        opacity: 0.5,
    },
    inputPicker: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        width:320,
    },
    loginAndRegister: {
        flexDirection: 'column',
        width: '100%'
    },
    buttonSubmit: {
        backgroundColor: "#5780D9",
        paddingLeft: 12,
        paddingRight: 12,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15
    },
    buttonSubmitText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    },
    lineContent: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        opacity: 0.2,
    },
    line: {
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        width: 135,
        alignSelf: 'center'
    },
    orText: {
        fontSize: 13
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    googleButton: {
        backgroundColor: "#d93433",
        width: 150,
        height: 50,
        justifyContent: 'center',
        //alignSelf: 'center',
    },
    facebookButton: {
        backgroundColor: "#475993",
        width: 150,
        height: 50,
        justifyContent: 'center',
        //alignSelf: 'center',
    },
    socialButtonText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        opacity: 0.3,
        marginBottom: 20
    },
    imageAuth: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    registerHere: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        opacity: 0.3,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});