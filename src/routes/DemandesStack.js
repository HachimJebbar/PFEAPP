import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../shared/header";
import React from 'react';
import Demandes from "../screens/Demandes";
import detailsdemande from  "../screens/detailsdemande"
const screens = {
    Demandes:{
        screen: Demandes,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Demandes'/>,
            }
        }
    },
    detailsdemande:{
        screen: detailsdemande,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='demandes'/>,
            }
        }
    },

};
const DemandesStack = createStackNavigator(screens);
export default DemandesStack;
