import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/Annonces'
import Header from "../shared/header";
import React from 'react';

const screens = {
    About:{
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Annonce'/>,
            }
        }
    },


};
const AnnoncesStack = createStackNavigator(screens);
export default AnnoncesStack;
