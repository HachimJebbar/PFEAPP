import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class reviewDetails extends React.Component {
    constructor(props){
        super(props);
        const {state} = props.navigation;
        

    }
render(){
    return (
        <View style={styles.container}>
            <Text>Type de cours souhaitez-vous </Text>
            <Text>{this.props.navigation.getParam('datause')}</Text>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Description')} >
                <Image source={require('../../assets/Images/grp.gif')} style = {styles.ImageView} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('Description')} >
                <Image source={require('../../assets/Images/ind.gif')} style = {styles.ImageView} />
            </TouchableOpacity>
            <Button onPress={() => this.props.navigation.navigate('Description')} title='GoTest'/>

        </View>
    );
}
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff6fe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageView: {
        width: 50,
        height: 50


    }
});
