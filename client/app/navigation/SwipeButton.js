import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../config'

const SwipeButton = () => {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    top: 30,
    height: 80,
    width: 80,
  },
})

export default SwipeButton
