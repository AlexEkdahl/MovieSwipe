import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SwipeScreen from '../screens/SwipeScreen'
import LoginScreen from '../screens/LoginScreen'
import Constants from 'expo-constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createMaterialTopTabNavigator()
const size = 30

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Swipe'
      screenOptions={{
        tabBarStyle: { paddingTop: Constants.statusBarHeight },
        swipeEnabled: false,
        lazy: true,
      }}>
      <Tab.Screen
        name='Settings'
        component={LoginScreen}
        options={{
          tabBarLabel: () => {
            return <MaterialCommunityIcons name='sword' size={size} />
          },
        }}
      />
      <Tab.Screen
        name='Swipe'
        component={SwipeScreen}
        options={{
          tabBarLabel: () => {
            return <MaterialCommunityIcons name='swap-horizontal' size={size} />
          },
        }}
      />
      <Tab.Screen
        name='Chat'
        component={LoginScreen}
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
