import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';



import General from '../screens/General';
import Travel from '../screens/Travel';
import Tech from '../screens/Tech';
import GeneralDetail from '../screens/GeneralDetail'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="General" component={General} options={{headerShown: false}} />
      <Stack.Screen name="GeneralDetail" component={GeneralDetail} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: { fontSize: 15 },
                tabStyle: { width: 100, height: 65 },
                showLabel: true,
                style: { backgroundColor: 'orange' },
            }}

        >
            <Tab.Screen name="General" component={MyStack} />
            <Tab.Screen name="Travel" component={Travel}  />
            <Tab.Screen name="Tech" component={Tech} />
        </Tab.Navigator>
        // </NavigationContainer>

    );
}

export default Tabs;