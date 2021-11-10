import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import SearchUserScreen from '../screens/SearchUserScreen'

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
      name='Login'
      component={SearchUserScreen}
    />
  </Stack.Navigator>
)

export default AccountNavigator
