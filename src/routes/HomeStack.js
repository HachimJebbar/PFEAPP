import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import Test from "../screens/Test"
import React from 'react';
import Description from "../screens/Description";
import communication from "../Modules/communication";
import dev from "../Modules/dev";
import informatique from "../Modules/informatique";
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
  Test: {
    screen: Test,
    navigationOptions: {
      title: 'test',
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
        headerTitle: () => <HeaderNone navigation={navigation} title='communication'/>,
      }
    }
  },
 informatique: {
    screen: informatique,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderNone navigation={navigation} title='informatique'/>,
      }
    }
  },
  langues: {
    screen: langues,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderNone navigation={navigation} title='langues'/>,
      }
    }
  },
  dev: {
    screen: dev,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderNone navigation={navigation} title='dev'/>,
      }
    }
  },


   
};
const HomeStack = createStackNavigator(screens);
export default HomeStack;
