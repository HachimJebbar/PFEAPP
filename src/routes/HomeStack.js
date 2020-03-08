import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home'
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";
import HeaderNone from "../shared/headerNone";
import Test from "../screens/Test"
import React from 'react';
import Description from "../screens/Description";
import Contact from "../screens/Contact";
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


   
};
const HomeStack = createStackNavigator(screens);
export default HomeStack;
