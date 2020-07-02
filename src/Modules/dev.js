import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class dev extends React.Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'ALGORITHME'})}>
                        <Text style={styles.text5 }>ALGORITHME</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'C'})}>
                        <Text style={styles.text5 }>PROGRAMMATION C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'JAVASCRIPT'})}>
                        <Text style={styles.text5 }>JAVASCRIPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'REACT_NATIVE'})}>
                        <Text style={styles.text5 }>REACT NATIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'PHP'})}>
                        <Text style={styles.text5 }>PHP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'LARAVEL'})}>
                        <Text style={styles.text5 }>LARAVEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'MYSQL'})}>
                        <Text style={styles.text5 }>MYSQL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'FIREBASE'})}>
                        <Text style={styles.text5 }>FIREBASE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'ANGULAR'})}>
                        <Text style={styles.text5 }>ANGULAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'JAVA'})}>
                        <Text style={styles.text5 }>JAVA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'HTML'})}>
                        <Text style={styles.text5 }>HTML</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Prerequis', {data1:'CSS'})}>
                        <Text style={styles.text5 }>CSS</Text>
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
        marginLeft : '5%',
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