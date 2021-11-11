import React from 'react'
import { TouchableOpacity } from 'react-native'

import Text from '../Text'

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  )
}

export default PickerItem
