import React from 'react'
import { View } from 'react-native'
import AppButton from '../AppButton'
import styles from './styles'

export default function Header() {
  return (
    <View style={styles.header}>
      <AppButton style={{ width: 10 }} title='ICON' />
      <AppButton style={{ width: '10%' }} title='LOGO' />
      <AppButton style={{ width: '10%' }} title='CHAT' />
    </View>
  )
}
