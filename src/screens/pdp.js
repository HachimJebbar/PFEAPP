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

export default class Pdp extends Component{

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
        if (Object.keys(this.state.images).length === 5){
            Alert.alert("Attention!!", "Maximum of documents to add is 5..");
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
            <View style={{flexDirection: 'column', marginTop: 10}}>
                <Text style={{fontSize: 15}}>Documents (max: 5)</Text>
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
                <View>
                    {
                        Object.keys(this.state.images).length   === 0 ? <View style={{marginTop: 8}}><Text style={{opacity: 0.4}}>No documents uploaded</Text></View>
                            :
                            this.state.images.map((image) => {
                                return (
                                    <View style={styles.documentsAdded} key={image.uri}>
                                        <Text>{image.name}</Text>
                                        <Icon onPress={() => this.handleDelete(image.uri)} name="trash" size={18} color="#000" style={{opacity: 0.4}} />
                                    </View>

                                )
                            })
                    }
                </View>
            </View>





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
        width: "60%",
        alignSelf: 'center',
        marginBottom: 8
    },
    inputs: {
        marginTop: 5,
        width: '90%'
    },
    stadiumAddress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        width: '95%',
        alignSelf: 'center',
    },
    documents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
    },
    goChooseButton: {
        borderRadius: 30/2,
        backgroundColor: "#E8F7FF",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        height: 30,
        alignSelf: 'center'
    },
    goChooseButtonText: {
        fontSize: 10,
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
        marginTop: 8
    }
});

