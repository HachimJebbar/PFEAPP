import React, { Component}  from 'react';
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
import {auth, db} from '../FireBase/FireBase';
export default class renderProf extends Component{
    constructor(props){
        super(props);
        this.uid=this.props.uid;
        this.state={
            Data:[]
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData=(Change=(Data)=>this.setState({Data:Data}))=>{
        db.ref("users").orderByChild("uid").equalTo(this.uid).once("value",function (snapshot) {
            snapshot.forEach(function (child) {
                Change(child.val())
            })
        })
    };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.adresse }>Prof: {this.state.Data.nom_complet}</Text>
                <Text style={styles.adresse }>Adresse: {this.state.Data.adresse}</Text>
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
        width : '100%'
    } ,
});