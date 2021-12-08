import React from 'react'

function Modal({ children, styles, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, styles]} {...otherProps}>
      {children}
    </Text>
  )
}

export default AppText
