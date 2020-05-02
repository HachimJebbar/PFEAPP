import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Annonces from '../screens/Annonces'
import Header from "../shared/header";
import React from 'react';
import HomeProf from "../screens/HomeProf";
import Description from "../screens/Description";
import HeaderNone from "../shared/headerNone";
import reviewDetails from "../screens/reviewDetails";
import communication1 from "../Modules/communication1";
import musique1 from "../Modules/musique1";
import langues1 from "../Modules/langues1";
import dev1 from "../Modules/dev1";
import tarif from "../screens/tarif";
import annonce from "../screens/annonce";
const screens = {
    Annonces:{
        screen: Annonces,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Annonce'/>,
            }
        }
    },
    HomeProf:{
        screen: HomeProf,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Home'/>,
            }
        }
    },
    Description : {
        screen: Description,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Description'/>,
            }
        }
    },
    reviewDetails: {
        screen: reviewDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Cours'/>,
            }
        }
    },
    tarif: {
        screen:tarif ,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Tarif'/>,
            }
        }
    },
    annonce: {
        screen:annonce ,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Annonce'/>,
            }
        }
    },
    communication1: {
        screen: communication1,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Communication'/>,
            }
        }
    },
    musique1: {
        screen: musique1,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Musique'/>,
            }
        }
    },
    langues1: {
        screen: langues1,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Langues'/>,
            }
        }
    },
    dev1: {
        screen: dev1,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Developpement'/>,
            }
        }
    },



};
const AnnoncesStack = createStackNavigator(screens);
export default AnnoncesStack;
