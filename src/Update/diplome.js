import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Button,
    Image,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as  ImagePicker from 'expo-image-picker';
import {auth, db, storage} from "../FireBase/FireBase";
export default class diplome extends Component{

    constructor(props) {
        super(props);
        const {state} = props.navigation;
        this.state= {
            images: [],
            diplomeImage:"",
            imageName: "",
            imageURL:"",
            userKey:'',
        }
    }
    handleDelete = () => {
        let userKey=this.state.userKey;
        db.ref('users/' + userKey).update({diplome: ""}).then(r  =>{this.getUserKey();alert("Image deleted")});
    };
    onChooseImagePress = async () => {
        if (Object.keys(this.state.images).length === 1){
            Alert.alert("Attention!!", "Maximum of documents to add is 1..");
        }else if (this.state.imageName === ""){
            Alert.alert("Attention!!", "Please give the image a name before uploading it..");
        }else{
            let result = await ImagePicker.launchImageLibraryAsync();
            if (result.type === 'image'){
                this.setState({imageURL:result.uri});
            }else
            {
                Alert.alert("Attention!!", "Please Image format only");
            }

        }
    };
    //affichage
    componentDidMount() {
        this.getUserKey();
    }
    getUserKey=(Change=(userKey)=>this.setState({userKey:userKey}))=>{
        let uid= auth.currentUser.uid;
        db.ref("users").orderByChild("uid").equalTo(uid)
            .once("value",function (snapshot) {
                snapshot.forEach(function (child) {
                    let Data= child.val();
                    Change(child.key);
                    getImage(Data.diplome);
                })
            });
        const getImage= async (dataImage) => {
            if (dataImage === "" || dataImage === undefined || dataImage === null){
                let ref = storage.ref('DiplomeImage/diplome.png');
                let url = await ref.getDownloadURL();
                this.setState({diplomeImage:url})
            }else {
                let ref = storage.ref('DiplomeImage/'+uid+'/'+dataImage);
                let url = await ref.getDownloadURL();
                this.setState({diplomeImage:url})
            }
        };
    };

    uploadImage = async (uri) => {
        /**
         * @return {string}
         */
        const S4 = ()=> {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        let uid= auth.currentUser.uid;
        //ajouter
        let imageNumber =(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        let userKey= this.state.userKey;
        const response = await fetch(uri);
        const blob = await response.blob();
        let ref = storage.ref().child("DiplomeImage/"+uid+"/"+imageNumber);
        db.ref('users/'+userKey).update({diplome:imageNumber});
        return ref.put(blob);
    };
    render() {
        let uri =this.state.diplomeImage;
        return (
            <View style={styles.container}>
                <Text style={styles.text1 }> Votre Diplome !!</Text>
                <View style={styles.documents}>
                    <TextInput
                        style={styles.imageInput}
                        value={this.state.imageName}
                        maxLength={22}
                        placeholder="Image name"
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "#a9a9a1"
                        autoCapitalize = "none"
                        onChangeText={(value) => { this.setState({imageName: value})}}
                    />
                    <TouchableOpacity style={styles.goChooseButton} onPress={this.onChooseImagePress}>
                        <Text style={styles.goChooseButtonText}>Go choose</Text>
                    </TouchableOpacity >

                </View>
                <Text style={{fontSize: 15,marginLeft:140,marginTop:10}}>Documents (max: 1)</Text>
                <View>
                    <Image
                        source={{ uri: uri}}
                        style={{borderRadius:500,flexDirection: 'row',width: '45%', height: '58%',marginLeft:'25%',}}
                    />
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => {this.uploadImage(this.state.imageURL).then(r => {this.getUserKey();alert("Image Set")})}} >
                        <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container21: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    container22: {
        flexDirection: 'row',
    },
    container3: {
        width : '100%',
        height : '100%',
        backgroundColor: '#fff',
        position :'absolute',
        top: 500 ,
    },
    input: {
        height: 40,
        fontSize: 16,
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        opacity: 0.5,
        width: "100%",
        alignSelf: 'center',
        marginBottom: 8
    },
    imageInput: {
        height: 40,
        fontSize: 16,
        borderColor: '#a9a9a1',
        borderBottomWidth: 1,
        opacity: 0.5,
        width: "30%",
        alignSelf: 'center',
        marginBottom: 8
    },
    inputs: {
        marginTop: 5,
        width: '90%'
    },
    text1 : {
        fontSize : 35,
        color : '#62A7A9',
        marginLeft : 90 ,
        fontWeight: 'bold',
        marginVertical:30,
        marginTop:70,
    },
    stadiumAddress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        width: '95%',
        alignSelf: 'center',
    },
    documents: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
    },
    goChooseButton: {
        borderRadius: 20,
        backgroundColor: "#E8F7FF",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        height: 50,
        width:250,
        alignSelf: 'center'
    },
    goChooseButtonText: {
        fontSize: 15,
        color: "#5780D9",
        textTransform: "uppercase",
        textAlign: "center",
    },
    addNewStadiumButton: {
        backgroundColor: "#5780D9",
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    addNewStadiumButtonText: {
        fontSize: 14,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 'bold',
    },
    documentsAdded: {
        flexDirection: 'column',
        width: '92%',
        marginTop: 8,
    },
    ButtonStyle:{
        backgroundColor: '#fff',
        borderWidth:2,
        borderRadius:10,
        height : 50,
        width : 250,
        marginLeft : '20%' ,
        paddingLeft : 15,
        paddingTop : 12,
        marginBottom: 10,
        alignItems : 'center',

    },
    NomImage :{
        flexDirection: 'row',
        fontSize : 25,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:180,
        marginVertical:5,
        fontWeight: 'bold',
        height:40,
        justifyContent: 'center',
        textAlign: "center",
        marginLeft : '10%',
    },
    icon :{
        backgroundColor:'#E7DEDE',
        width:45,
        height : 40,
        marginTop:5,
        padding : 6,
    },
});
