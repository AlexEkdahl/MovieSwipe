import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { colors } from '../../config'
import Text from '../Text'

function Button({ title, onPress, color = 'primary', style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], ...style }]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
