import React, { useState } from 'react'
import LoginScreen from './app/screens/LoginScreen'
import SwipeScreen from './app/screens/SwipeScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import { AuthContext } from './app/auth'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <SwipeScreen /> : <LoginScreen />}
    </AuthContext.Provider>
  )
}
