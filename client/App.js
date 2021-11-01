import React, { useState } from 'react'
import { AuthContext } from './app/auth'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SwipeableCardStack from './app/components/SwipeableCardStack'
import SwipeScreen from './app/screens/SwipeScreen'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <AuthContext.Provider value={{ user, setUser }}>
          {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
          <AppNavigator />
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
