import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import ChatScreen from './ChatScreen';
import Settings from './Settings';
import Discover from './Discover';
import DiscoverT from './DiscoverT';
import ChatIconWhite from '../assets/ChatIconWhite.svg';
import Discovericon from '../assets/Discover.svg';
import Settingicon from '../assets/Settings.svg';

const Tab = createBottomTabNavigator();

class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName='Discover'
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'lightblue',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 10,
          },
          tabStyle: {
            alignItems: 'center',
          },
        }}
      >

        {/* // change is here */}
        <Tab.Screen
          name="DiscoverT"
          component={DiscoverT}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <this.CustomTabBarIcon
                Icon={Discovericon}
                label="Discover"
                focused={focused}
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <this.CustomTabBarIcon
                Icon={ChatIconWhite}
                label="Chat"
                focused={focused}
                color={color}
                size={size}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <this.CustomTabBarIcon
                Icon={Settingicon}
                label="Settings"
                focused={focused}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  CustomTabBarIcon = ({ Icon, label, focused, color, size }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon fill={focused ? color : 'gray'} width={size} height={size} />
        <Text style={{ color: focused ? color : 'gray', marginLeft: 5 }}>{label}</Text>
      </View>
    );
  };
}

export default BottomNavigation;

const styles = StyleSheet.create({
  font: {
    fontFamily: "pop-regular",
  },
});


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ChatScreen from './ChatScreen';
// import Settings from './Settings'; //1 
// import Discover from './Discover'; //2
// import { View, Text, StyleSheet, Pressable,Image,ImageBackground,TextInput } from 'react-native';
// import ChatIconWhite from '../assets/ChatIconWhite.svg'
// import Discovericon from '../assets/Discover.svg'
// import Settingicon from '../assets/Settings.svg'

// const Tab = createBottomTabNavigator();

//  export default function BottomNavigation() {
//   return (
//     <Tab.Navigator initialRouteName='Discover' tabBarOptions={{  showLabel: false,
//       style: {
//         backgroundColor: 'lightblue', // Background color of the tab bar
//         borderTopLeftRadius: 20, // Rounded top left corner
//         borderTopRightRadius: 20, // Rounded top right corner
//         paddingVertical: 10, // Padding top and bottom
//       },
//       tabStyle: {
//         alignItems: 'center', // Center align tab items
//       },}} >
     
// <Tab.Screen
//         name="Discover"
//         component={Discover}
//         options={{
//           headerShown: false,
          
//           tabBarIcon: ({ color, size, focused }) => (
//             <CustomTabBarIcon
//               Icon={Discovericon}
//               label="Discover"
//               focused={focused}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />


// {/* <Tab.Screen
//         name="Chat"
//         component={ChatScreen}
//         options={{
//           headerShown: false,
          
//           tabBarIcon: ({ color, size, focused }) => (
//             <CustomTabBarIcon
//               Icon={ChatIconWhite}
//               label="Chat"
//               focused={focused}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       /> */}
// <Tab.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           headerShown: false,
          
//           tabBarIcon: ({ color, size, focused }) => (
//             <CustomTabBarIcon
//               Icon={Settingicon}
//               label="Settings"
//               focused={focused}
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />



//     </Tab.Navigator>
//   );
// }

// function CustomTabBarIcon({ Icon, label, focused, color, size }) {
//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Icon fill={focused ? color : 'gray'} width={size} height={size} />
//       <Text style={{ color: focused ? color : 'gray', marginLeft: 5 }}>{label}</Text>
//     </View>
//   );
// }