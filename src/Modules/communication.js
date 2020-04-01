import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class communication extends React.Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
    }
    callFun = () =>
    {
        alert("Matière choisie!!!");
    };
    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.text1 }>Liste des matières populaires : </Text>


            <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'interpersonnelle'})}>
                    <Text style={styles.text5 }>Interpersonnelle </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'groupe'})}>
                    <Text style={styles.text5 }>En groupe</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Description', {data1:'masse'})}>
                    <Text style={styles.text5 }>En masse</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1 : {
        fontSize : 24,
        color : '#62A7A9',
        marginBottom : 10 ,
        marginVertical : 50 ,
        marginLeft : 40 ,
        fontWeight: 'bold',
    },
    text5 : {
        fontSize : 20,
        color : '#fff',
        backgroundColor:'#E7DEDE',
        width:320,
        marginVertical:5,
        fontWeight: 'bold',
        height:30,
        marginLeft: '5%',
        textAlign : 'center',
    },
});
