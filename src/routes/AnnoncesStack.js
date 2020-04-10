import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Annonces from '../screens/Annonces'
import Header from "../shared/header";
import React from 'react';
import HomeProf from "../screens/HomeProf";
import Description from "../screens/Description";
import HeaderNone from "../shared/headerNone";
import ReviewDetails from "../screens/reviewDetails";
import Contact from "../screens/Contact";
import pdp from "../screens/pdp";
import communication from "../Modules/communication";
import musique from "../Modules/musique";
import langues from "../Modules/langues";
import dev from "../Modules/dev";

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
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='ReviewDetails'/>,
            }
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Contact'/>,
            }
        }
    },
    pdp: {
        screen:pdp ,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Image'/>,
            }
        }
    },
    communication: {
        screen: communication,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Communication'/>,
            }
        }
    },
    musique: {
        screen: musique,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Musique'/>,
            }
        }
    },
    langues: {
        screen: langues,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Langues'/>,
            }
        }
    },
    dev: {
        screen: dev,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Developpement'/>,
            }
        }
    },



};
const AnnoncesStack = createStackNavigator(screens);
export default AnnoncesStack;
