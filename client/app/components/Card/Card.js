import React from 'react'
import { View, ImageBackground } from 'react-native'
import styles from './styles'
import AppText from '../AppText'
import { DEFAULT_POSTER_URL } from '../../config'

function Card({ title, plot, image = DEFAULT_POSTER_URL }) {
  return (
    <ImageBackground style={styles.card} source={{ uri: image }}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.plot}>{plot}</AppText>
      </View>
    </ImageBackground>
  )
}

export default Card
