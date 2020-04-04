import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import React from 'react';
import Description from "../screens/Description";
import communication from "../Modules/communication";
import dev from "../Modules/dev";
import musique from "../Modules/musique";
import langues from "../Modules/langues";
import Contact from "../screens/Contact";
import pdp from "../screens/pdp";
const screens = {

  Home:{
      screen: Home,
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
const HomeStack = createStackNavigator(screens);
export default HomeStack;
