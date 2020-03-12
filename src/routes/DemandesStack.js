import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import test from "../screens/Test"
import About from '../screens/Annonces'
import Header from "../shared/header";
import React from 'react';

const screens = {
    About:{
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'/>,
            }
        }
    },


};
const AnnoncesStack = createStackNavigator(screens);
export default AnnoncesStack;
