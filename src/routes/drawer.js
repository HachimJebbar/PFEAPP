import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import AnnoncesStack from "./AnnoncesStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image, Alert} from 'react-native';
import {Container, Header, Body, Content} from 'native-base';
import React from "react";
import {auth} from "../FireBase/FireBase";
import { Updates } from 'expo';
import Demandes from "../screens/Demandes";
import DemandesStack from "./DemandesStack";



const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    Annonces: {
        screen: AnnoncesStack,
    },
    Demandes: {
        screen: DemandesStack,
    },

},{
    contentComponent: (props) => (

        <Container>
            <Header style={{height: 200, backgroundColor: 'white'}}>
                <Body>
                        <Image
                            style={styles.DrawerImage}
                            source={require('../../assets/Images/professeur.png')} />
                </Body>
            </Header>
            <Content>
                <DrawerItems {...props}/>
                <View >
                    <Button title="Logout" onPress={message =>{
                        auth.signOut().then(function() {
                            Updates.reload()
                        }).catch(function(error) {
                            alert('error : ', error)
                        });
                    }}/>

                </View>
            </Content>
        </Container>
    ),

    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
});


export default createAppContainer(RootDrawerNavigator);

const styles = StyleSheet.create({
    DrawerImage:{
        height: 150,
        width: 150,
        borderRadius:75,
        marginLeft: 50,
    }
});
