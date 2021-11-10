import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import SearchUserScreen from '../screens/SearchUserScreen'
import FriendsScreen from '../screens/FriendsScreen'

const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name='Account'
      component={AccountScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name='SearchUser'
      component={SearchUserScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name='Friends'
      component={FriendsScreen}
    />
  </Stack.Navigator>
)

export default AccountNavigator
