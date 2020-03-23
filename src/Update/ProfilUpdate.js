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

export default class ProfilUp extends Component{
    state= {
        images: [],
        imageName: "",
    }
    constructor(props) {
        super(props);
        const {state} = props.navigation;
    }
    handleDelete = imageUri => {
        const images = this.state.images.filter(image => image.uri !== imageUri);
        this.setState({ images: images });
    };
    onChooseImagePress = async () => {
        if (Object.keys(this.state.images).length === 1){
            Alert.alert("Attention!!", "Maximum of documents to add is 1..");
        }else if (this.state.imageName === ""){
            Alert.alert("Attention!!", "Please give the image a name before uploading it..");
        }else{
            let result = await ImagePicker.launchImageLibraryAsync();
            this.state.images.push({uri: result.uri, name: this.state.imageName});
            this.setState({imageName: ""})
        }
    };
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <View style={{flexDirection: 'column', marginTop: 60,}}>
                <Text style={styles.text1 }> Votre Profil !!</Text>

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
                    {
                        Object.keys(this.state.images).length   === 0 ? <View style={{marginTop: 8}}><Text style={{opacity: 0.4,marginLeft:133,}}>No documents uploaded</Text></View>
                            :
                            this.state.images.map((image) => {
                                return (
                                    <View style={styles.documentsAdded} key={image.uri}>
                                        <Text>{image.name}</Text>

                                        <Icon onPress={() => this.handleDelete(image.uri)} name="trash" size={18} color="#000" style={{opacity: 0.4}} />
                                        {image && (
                                            <Image
                                                source={{ uri: image.uri }}
                                                style={{ width: 300, height: 300 }}
                                            />
                                        )}
                                    </View>


                                )
                            })
                    }
                </View>


                <Text> Adresse : </Text>
                <TextInput placeholder={"Les infos mn dataBase"}></TextInput>
                <Text> Téléphone : </Text>
                <TextInput placeholder={"Les infos mn dataBase"}></TextInput>
                <Text> E-mail : </Text>
                <TextInput placeholder={"Les infos mn dataBase"}></TextInput>


                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('pdp')} >
                    <Text style={{fontWeight: 'bold',fontSize : 18,color: '#828788' }}>Confirmer </Text>
                </TouchableOpacity>



            </View>
            </View>
            </ScrollView>




        );}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        width: "80%",
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
    textAreaContainer: {
        padding: 5,
        marginTop: 20
    },
    textArea: {
        borderColor: "#333333",
        borderWidth: 1,
        height: 100,
        justifyContent: "flex-start",
        opacity: 0.5
    },
    documentsAdded: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '92%',
        marginTop: 8,

    },
    ButtonStyle:{
        backgroundColor: '#fff',
        borderWidth:2,
        borderRadius:10,
        height : 50,
        width : 270,
        marginLeft : 70 ,
        paddingLeft : 15,
        paddingTop : 12,
        marginBottom: 10,
        alignItems : 'center',
        marginVertical: 70,
    },
});

