import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Constants from 'expo-constants'
import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import MessagesScreen from '../screens/MessagesScreen'
import SwipeScreen from '../screens/SwipeScreen'
import AccountNavigator from './AccountNavigator'

const Tab = createMaterialTopTabNavigator()
const size = 30

function AppNavigator() {
  useEffect(() => {
    registerForPush()
  }, [])

  const registerForPush = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
      console.log(`status`, status)
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data
    console.log(token)
  }

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
