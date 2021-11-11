import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SwipeScreen from '../screens/SwipeScreen'
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AccountNavigator from './AccountNavigator'
import MessagesScreen from '../screens/MessagesScreen'

const Tab = createMaterialTopTabNavigator()
const size = 30

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Swipe'
      screenOptions={{
        tabBarStyle: { paddingTop: Constants.statusBarHeight },
        lazy: true,
      }}>
      <Tab.Screen
        name='Settings'
        component={AccountNavigator}
        options={{
          tabBarLabel: () => {
            return <MaterialCommunityIcons name='account' size={size} />
          },
        }}
      />
      <Tab.Screen
        name='Swipe'
        component={SwipeScreen}
        options={{
          swipeEnabled: false,
          tabBarLabel: () => {
            return <MaterialCommunityIcons name='swap-horizontal' size={size} />
          },
        }}
      />
      <Tab.Screen
        name='Chat'
        component={MessagesScreen}
        options={{
          tabBarLabel: () => {
            return <MaterialCommunityIcons name='message' size={size} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
