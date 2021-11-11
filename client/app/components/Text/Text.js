import React from 'react'
import { Text } from 'react-native'
import { defaultStyles } from '../../config'

function AppText({ children, styles, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, styles]} {...otherProps}>
      {children}
    </Text>
  )
}

export default AppText
