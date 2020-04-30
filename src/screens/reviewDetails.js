import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class reviewDetails extends React.Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
        

    }
    state = {
        description1: this.props.navigation.getParam('text'),
        parcours: this.props.navigation.getParam('text'),
        langue: this.props.navigation.getParam('data1'),
        type: "",
    };
render(){
    return (
        console.log(this.state.type),
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={styles.text1 }> Quel type de cours  </Text>
            <Text style={styles.text1 }> souhaitez-vous donner ?  </Text>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('tarif', {data:'En Groupe'})} >
                <Image source={require('../../assets/Images/grp.gif')} style = {styles.ImageView} />
                <Text style={styles.text2 }> En Groupe  </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('tarif', {data:'Individuel'})} >
                <Image source={require('../../assets/Images/ind.gif')} style = {styles.ImageView} />
                <Text style={styles.text2 }> Individuel  </Text>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('tarif')} style={styles.ButtonStyle}>
                    <Text style={{fontSize : 18,color: 'white' }}>Continuer</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        marginVertical : '15%'
    },
    container2: {
        flexDirection : 'row',
        marginHorizontal : '10%',
        marginBottom:  '20%'
    },
    text1 : {
        fontSize : 30,
        color : '#62A7A9',
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
    text2 : {
        fontSize : 25,
        color : '#62A7A9',
        marginLeft : 15 ,
        fontWeight: 'bold',

    },
    ImageView: {
        width: 120,
        height: 120,
        marginHorizontal : '10%',
    },
    ButtonStyle:{
        backgroundColor: '#62A7A9',
        borderRadius:10,
        height : 50,
        width : 250,
        marginLeft : 80 ,
        paddingLeft : 15,
        paddingTop : 12,
        marginBottom: 10,
        alignItems : 'center',
    },
});
