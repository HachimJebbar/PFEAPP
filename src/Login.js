import React from 'react';
import Home from './src/screens/Home';
import NavigatorUser from './src/routes/drawerUser';
import NavigatorOwner from './src/routes/drawerOwner';
import {auth, db} from "./src/services/FireBaseConfig";
import {
    ActivityIndicator,
    Alert,
    Animated,
    Image, ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal
} from "react-native";
import {APPROX_STATUSBAR_HEIGHT} from "react-native-paper/src/constants";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SocialIcon} from "react-native-elements";
import Register from "./src/Authentification/Register";
export default class App extends React.Component{

    constructor(){
        super();

        this.state = {
            user:{},
            userInfo:{},
            data:{},
            dataSource:{},
            Data:{},
            scroll: new Animated.Value(0),
            email: "",
            username: "",
            password: "",
            isLoading: true,
            modalVisible: false,
            error:null,
            secureTextEntryFirst:true,
            showFirst:'show',
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    handleEmail(value){
        this.setState({email: value})
    };
    handlePassword(value){
        this.setState({password: value})
    };
    componentDidMount() {
        this.getNavigator();
    }
    loginUser = (email, password, props, Change=()=>this.getNavigator()) => {
        props = this.props;
        auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
                Change();
            }).catch(error => this.setState({ error: error.message }))
    };

    getNavigator=  (Change=()=>this.setState({Data:'LoggedIn',isLoading: false}), Change2=()=>this.setState({Data:'NotLoggedIn',isLoading: false}),
    )=> {
        setTimeout(function(){
            if (auth.currentUser === null){
                console.log(auth.currentUser);
                Change2();
            }else {
                Change();

            }
        }, 1000);

    };
    render() {
        const secureTextEntryFirst=()=>{
            if (this.state.secureTextEntryFirst){
                this.setState({secureTextEntryFirst:false, showFirst:'hide'})
            }if (!this.state.secureTextEntryFirst){
                this.setState({secureTextEntryFirst:true, showFirst:'show'})
            }
        };
        const CloseModal =()=>{
            this.setModalVisible(false);
        };

        console.disableYellowBox = true;

        if (this.state.isLoading) {
            return (
                <ImageBackground source={require('./assets/Images/main.png')} style={{flex:1}}/>
            );
        }
        console.log(auth.currentUser);
        if (this.state.Data === 'LoggedIn'){
            return <NavigatorUser/>
        }else{
            return (
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <Register CloseModal={CloseModal}/>
                    </Modal>
                    <Image style={styles.imageAuth} source={require('./assets/Images/authImage.png')} />
                    <View style={styles.inputs}>
                        <Text>{this.state.error}</Text>
                        <View style={styles.inputContainer}>
                            <Icon style={styles.searchIcon} name="envelope" size={20} color="#000"/>
                            <TextInput
                                style={styles.input}
                                value={this.state.email}
                                maxLength={55}
                                placeholder="Email address"
                                underlineColorAndroid = "transparent"
                                placeholderTextColor = "#a9a9a1"
                                autoCapitalize = "none"
                                onChangeText={(value) => { this.handleEmail(value)}}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                            <TextInput
                                style={styles.input}
                                value={this.state.password}
                                maxLength={22}
                                secureTextEntry={this.state.secureTextEntryFirst}
                                placeholder="Password"
                                underlineColorAndroid = "transparent"
                                placeholderTextColor = "#a9a9a1"
                                autoCapitalize = "none"
                                onChangeText={(value) => { this.handlePassword(value)}}
                            />
                            <Text onPress={()=>secureTextEntryFirst()} style={styles.PasswordIcon}>{this.state.showFirst}</Text>
                        </View>
                    </View>
                    <View style={styles.loginAndRegister}>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={() => this.loginUser(this.state.email, this.state.password)}>
                            <Text style={styles.buttonSubmitText}>Login</Text>
                        </TouchableOpacity >
                        <Text style={styles.registerHere} onPress={() => {
                            this.setModalVisible(true);
                        }}>Register here</Text>
                    </View>
                    <View style={styles.lineContent}>
                        <View style={styles.line}/>
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.line}/>
                    </View>
                    <View style={styles.socialButtonsContainer}>
                        <SocialIcon
                            title='Google'
                            style={styles.googleButton}
                            button
                            type='google'
                            onPress={() => Alert.alert("Google")}
                        />

                        <SocialIcon
                            title='Facebook'
                            style={styles.facebookButton}
                            button
                            type='facebook'
                            onPress={() => Alert.alert("Google")}
                        />
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={{textDecorationLine: 'underline'}} onPress={() => Alert.alert("Action")}>Terms & Conditions</Text>
                    </View>
                </View>
            );
        }
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
        marginTop: APPROX_STATUSBAR_HEIGHT

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
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        marginBottom: 20,
        opacity: 0.5,
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
    PasswordIcon:{
        position:'absolute',
        padding: 8,
        marginLeft:300,
    }
});