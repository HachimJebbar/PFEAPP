import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { MaterialIcons, AntDesign} from '@expo/vector-icons';

export default function HeaderNone({navigation, title}) {
    
    return (
        <View style={styles.header}>
            
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        marginLeft: 150,
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    },
    icon: {
        position: 'absolute',
        left: 10,
    },
});
