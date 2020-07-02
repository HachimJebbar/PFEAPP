import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert, Animated, TouchableOpacity, ScrollView,Picker
} from 'react-native';
import {auth, db} from "../FireBase/FireBase";
import * as yup from "yup";
import { Formik } from 'formik';
import * as ImagePicker from "expo-image-picker";
import Icon from "../../native-base-theme/components/Icon";


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
            cities:[],
            cityChosen:'',

        };
    }
    signUpUser = (values, props) => {
        let ville= this.state.cityChosen;
        if (values.password === values.repeatpassword){
            auth.createUserWithEmailAndPassword(values.email, values.password).then(user => {
                db.ref('/users').push({
                    uid: user.user.uid,
                    email: values.email,
                    nom_complet: values.nom_complet,
                    numero: values.numero,
                    adresse : values.adresse,
                    ville : ville,
                    annonces: {},
                });
                Alert.alert('Action!', 'Your account is set');
            }).catch(error => this.setState({ error: error.message }))
        }else {
            this.setState({ error: 'Password match' })
        }

    };
    getCities=(Change=(Data)=>{this.setState({cities:Data})})=> {
        let ref = db.ref("/cities");
        let query = ref.orderByKey();
        query.once("value", function (snapshot) {
            let Data = snapshot.val();
            Change(Data);
        });
    };
    OnSelectCity=(e)=>{
        this.setState({cityChosen:e});

    };
    componentDidMount() {
        this.getCities();
    }

    render() {
        const Check = yup.object({
            nom_complet: yup.string().required().max(40).min(8),
            email: yup.string().required().email(),
            password: yup.string().required().max(40).min(8),
            repeatpassword: yup.string().required().max(40).min(8),
        });

        let keyCity= Object.keys(this.state.cities);
        return (
            <ScrollView>

                <View style={styles.container}>


                    <Formik
                        initialValues={{
                            nom_complet: '',
                            email: '',
                            password: '',
                            repeatpassword: '',
                            numero:'',
                            adresse:'',
                            ville:'',
                            images:'',
                            imageName:'',

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
                                <View style={styles.inputContainer}>

                                    <TextInput style={styles.inputs}
                                               onChangeText={props.handleChange('numero')}
                                               value={props.values.numero}
                                               onBlur={props.handleBlur('numero')}
                                               placeholder="Numero"
                                               underlineColorAndroid="transparent"
                                               placeholderTextColor="#a9a9a1"
                                               autoCapitalize="none"/>
                                </View>
                                <View style={styles.inputContainer}>

                                    <TextInput style={styles.inputs}
                                               onChangeText={props.handleChange('adresse')}
                                               value={props.values.adresse}
                                               onBlur={props.handleBlur('adresse')}
                                               placeholder="Adresse"
                                               underlineColorAndroid="transparent"
                                               placeholderTextColor="#a9a9a1"
                                               autoCapitalize="none"/>
                                </View>
                                <View style={styles.inputContainer}>

                                    <Picker style={styles.inputPicker}
                                            selectedValue={this.state.cityChosen}
                                            onValueChange={e => this.OnSelectCity(e)}
                                            mode="dropdown"
                                    >

                                        {
                                            keyCity.map((key)=>{
                                                let Data =this.state.cities[key];
                                                return(<Picker.Item label={Data.City} value={Data.City}/>
                                                )
                                            })
                                        }
                                    </Picker>
                                </View>



                                <View style={styles.container0}>
                                    <View View style={styles.container1}>
                                        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
                                                            onPress={props.handleSubmit} >
                                            <Text style={styles.signUpText}>S'inscrire</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <Text style={styles.registerHere} onPress={() => this.props.CloseModal()}>Vous avez un compte ?Connectez-vous</Text>

                                </View>

                            </View>



                        )

                        }
                    </Formik>


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
    inputPicker: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        width:370,
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
        marginLeft : '10%' ,
        width : 280,
    },
    signUpText: {
        color: 'white',
    },
    text: {
        color: '#62A7A9',
        fontSize: 40,
        fontWeight: 'bold',
    },
    registerHere : {
        color: '#62A7A9',
        fontWeight: 'bold',
        marginLeft : '14%' ,
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