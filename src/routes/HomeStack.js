import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import React from 'react';
import communication from "../Modules/communication";
import dev from "../Modules/dev";
import musique from "../Modules/musique";
import langues from "../Modules/langues";
import Prerequis from "../Etudiant/Prerequis";
import RecherchePr from  "../Etudiant/RecherchePr"
const screens = {

  Home:{
      screen: Home,
        navigationOptions: ({ navigation }) => {
        return {
        headerTitle: () => <Header navigation={navigation} title='Home'/>,
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
  Prerequis: {
    screen: Prerequis,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderNone navigation={navigation} title='Prerequis'/>,
      }
    }
  },
  RecherchePr: {
    screen: RecherchePr,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderNone navigation={navigation} title='Professeur'/>,
      }
    }
  },

   
};
const HomeStack = createStackNavigator(screens);
export default HomeStack;
