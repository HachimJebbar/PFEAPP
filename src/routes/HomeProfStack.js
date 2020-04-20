import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import React from 'react';
import Description from "../screens/Description";
import Contact from "../screens/Contact";
import pdp from "../screens/pdp";
import HomeProf from "../screens/HomeProf";
import communicationPro from "../Modules/communication1";
import musique1 from "../Modules/musique1";
import dev1 from "../Modules/dev1";
const screens = {

  HomeProf:{
      screen: HomeProf,
        navigationOptions: ({ navigation }) => {
        return {
        headerTitle: () => <Header navigation={navigation} title='HomeProf'/>,
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
  communicationPro: {
    screen: communicationPro,
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
const HomeStack = createStackNavigator(screens);
export default HomeStack;
