import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

import General from '../screens/General';
import Travel from '../screens/Travel';
import Tech from '../screens/Tech';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: { fontSize: 12 },
                tabStyle: { width: 100, height: 65 },
                showLabel: true,
                style: { backgroundColor: 'orange' },
            }}

        >
            <Tab.Screen name="General" component={General} />
            <Tab.Screen name="Travel" component={Travel}  />
            <Tab.Screen name="Tech" component={Tech} />
        </Tab.Navigator>
        // </NavigationContainer>

    );
}

export default Tabs;