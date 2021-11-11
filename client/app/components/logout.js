//temp
import React, { useContext } from 'react'
import { View } from 'react-native'
import AppButton from './Button'
import { logout } from '../api'
import { AuthContext } from '../auth'
import { removeUser } from '../auth'

export default function Logout() {
  const authContext = useContext(AuthContext)

  const handleOnPress = async () => {
    const result = await logout()
    if (!result.ok) return
    authContext.setUser(null)
    removeUser()
  }
  return (
    <View>
      <AppButton title='Logout' onPress={handleOnPress} />
    </View>
  )
}
