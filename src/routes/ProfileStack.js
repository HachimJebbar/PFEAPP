import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/Profile'
import Header from "../shared/header";
import React from 'react';
import ProfilUpdate from "../Update/ProfilUpdate";
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
};


const ProfileStack = createStackNavigator(screens);
export default ProfileStack;
