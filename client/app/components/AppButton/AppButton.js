import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { colors } from '../../config'
import AppText from '../AppText'

function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  )
}

export default AppButton
