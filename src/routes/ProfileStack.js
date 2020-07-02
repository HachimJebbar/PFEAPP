import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/Profile'
import Header from "../shared/header";
import React from 'react';
import infoupdate from "../Update/infoupdate";
import ProfilUpdate from "../Update/ProfilUpdate";
import adresseupdate from  "../Update/adresseupdate";
import diplome from "../Update/diplome";
import identite from "../Update/identite";
import mdpupdate from "../Update/mdpupdate";
import HeaderNone from "../shared/headerNone";
const screens = {
    Profile:{
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Profile'/>,
            }
        }
    },

    ProfilUpdate:{
    screen: ProfilUpdate,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header navigation={navigation} title='ProfilUpdate'/>,
        }
    }
        },
    adresseupdate: {
        screen: adresseupdate,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Adresse'/>,
            }
        }
    },
    diplome: {
        screen: diplome,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Diplome'/>,
            }
        }
    },
    identite: {
        screen: identite ,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Identité'/>,
            }
        }
    },
    infoupdate: {
        screen: infoupdate,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Vos Informations'/>,
            }
        }
    },
    mdpupdate: {
        screen: mdpupdate,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Mot de passe'/>,
            }
        }
    },
};


const ProfileStack = createStackNavigator(screens);
export default ProfileStack;
