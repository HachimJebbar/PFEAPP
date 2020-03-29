import Accueil from "../screens/Accueil";
import Header from "../shared/header";
import React from "react";
import Inscription from "../screens/Inscription";
import HeaderNone from "../shared/headerNone";
import {createStackNavigator} from "react-navigation-stack";


const screens = {
    Accueil:{
        screen: Accueil,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='ACCUEIL'/>,
            }
        }
    },
    Inscription : {
        screen:  Inscription ,
            navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Inscription'/>,
            }
        }
    },
};
const AccueilStack = createStackNavigator(screens);
export default AccueilStack;

