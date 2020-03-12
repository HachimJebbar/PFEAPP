import Accueil from "../screens/Accueil";
import Header from "../shared/header";
import React from "react";
import Inscription from "../screens/Inscription";
import HeaderNone from "../shared/headerNone";

const screens = {
    Accueil:{
        screen: Accueil,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title=''/>,
            }
        }
    },
    Inscription : {
        screen:  Inscription ,
            navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderNone navigation={navigation} title='Inscription'/>,
            }
        }
    },
}