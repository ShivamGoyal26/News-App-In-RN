import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import General from '../screens/General';



const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home"
             drawerContentOptions={{
                 activeTintColor: 'orange',
                 itemStyle: {marginVertical:5}
             }}
            >
                    <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="General" component={General} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

// const Stack = createStackNavigator();

// const MyStack = () => {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={MyTabs}
//             options={{ title: 'Welcome' }}
//           />
//           {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   };

// function MyTabs() {
//     return (

//         <Tab.Navigator
//             tabBarOptions={{
//                 activeTintColor: 'white',
//                 labelStyle: { fontSize: 12 },
//                 tabStyle: { width: 100, height: 65 },
//                 showLabel: true,
//                 style: { backgroundColor: 'orange' },
//             }}

//         >
//             <Tab.Screen name="Tab1" component={Tab1} options={{ tabBarLabel: 'General' }} />
//             <Tab.Screen name="Tab2" component={Tab2} options={{ tabBarLabel: 'Travel' }} />
//             <Tab.Screen name="Tab3" component={Tab3} options={{ tabBarLabel: 'Tech' }} />
//         </Tab.Navigator>

//     );
// }

export default MyDrawer;