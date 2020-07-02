import React, {Component} from "react";
import {
    ScrollView,
    Image,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    CheckBox,
    TouchableHighlight,RefreshControl
} from 'react-native';
import {db} from "../FireBase/FireBase";
export default class InfosEtudiant extends Component{
    constructor(props){
        super(props);
        this.uidEtudiant=this.props.uidEtudiant;
        this.state={
            Data:[]
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData=(Change=(Data)=>this.setState({Data:Data}))=>{
        db.ref("users").orderByChild("uid").equalTo(this.uidEtudiant).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                Change(child.val())
            })
        })
    };
    render() {
        return(
            <View style={styles.container}>
                <Image source={this.state.Data.PDP}/>
                <Text style={styles.adresse}>{this.state.Data.nom_complet}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    adresse : {
        flexDirection : 'row',
        fontSize : 19,
        color : '#AFA5A5',
        fontWeight: 'bold',
        width : '100%',
        marginTop : '5%'
    } ,
});