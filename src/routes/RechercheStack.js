import { createStackNavigator } from 'react-navigation-stack';
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import RechercheMat from "../Etudiant/RechercheMat"
import RecherchePr from "../Etudiant/RecherchePr"
import Prerequis from "../Etudiant/Prerequis"

import React from 'react';
import Description from "../screens/Description";



const screens = {
RechercheMat:{
    screen: RechercheMat,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header navigation={navigation} title='Recherche_Matière'/>,
        }
    }
},
    RecherchePr : {
    screen: RecherchePr,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <HeaderNone navigation={navigation} title='Recherche_Prof'/>,
        }
    }
},
    Prerequis : {
        screen: Prerequis,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Prerequis'/>,
            }
        }
    },



};
const HomeStack = createStackNavigator(screens);
export default HomeStack;
