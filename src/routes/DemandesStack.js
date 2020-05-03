import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from "../shared/header";
import React from 'react';
import Demandes from "../screens/Demandes";

const screens = {
    Demandes:{
        screen: Demandes,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Demandes'/>,
            }
        }
    },


};
const DemandesStack = createStackNavigator(screens);
export default DemandesStack;
