import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Tabs from '../Navigation/Tabs';

const HomeScreen = props => {
    return(
        <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Entypo name="menu" color='black' size={20} onPress={() => {props.navigation.toggleDrawer()}}/>
        <Text style={{fontSize: 30, color: 'grey', marginLeft: 20}}>News App</Text>
        </View>
        <Tabs />
        
         </View>
    )
}

export default HomeScreen;