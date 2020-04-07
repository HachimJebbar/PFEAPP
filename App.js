import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert, Animated, ImageBackground
} from 'react-native';
import {auth, db} from "./src/FireBase/FireBase";
import NavigatorUser from "./src/routes/drawer";

export default class App extends Component {
  state;

  constructor(props) {
    super(props);
    this.state = {
      user:{},
      Data:{},
      scroll: new Animated.Value(0),
      email   : '',
      password: '',
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
  loginUser = (email, password, Change=()=>this.getNavigator()) => {
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
          <ImageBackground source={require('./assets/Images/professeur.png')} style={{flex:1}}/>
      );
    }
    if (this.state.Data === 'LoggedIn'){
      return <NavigatorUser/>
    }else {
      return (
          <View style={styles.container}>

            <Text style={styles.text}> Connexion </Text>


            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                         placeholder="Email"
                         keyboardType="email-address"
                         underlineColorAndroid='transparent'
                         onChangeText={(value) => { this.handleEmail(value)}}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                         placeholder="Entrer le mot de passe"
                         secureTextEntry={true}
                         underlineColorAndroid='transparent'
                         onChangeText={(value) => { this.handlePassword(value)}}/>
            </View>

            <View style={styles.container0}>
              <View View style={styles.container1}>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.loginUser(this.state.email, this.state.password)}>
                  <Text style={styles.signUpText}>Connexion</Text>
                </TouchableHighlight>
              </View>

            </View>
          </View>
      );
    }

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
