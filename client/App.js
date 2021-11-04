import React, { useEffect, useState } from 'react'
import { AuthContext, getUser } from './app/auth'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [user, setUser] = useState(null)

  const restoreUser = async () => {
    const userFromStore = await getUser()
    if (!userFromStore) return
    setUser(userFromStore)
  }

  useEffect(() => {
    restoreUser()
  }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <AuthContext.Provider value={{ user, setUser }}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
