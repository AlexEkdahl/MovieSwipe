import React from 'react'
import { View } from 'react-native'
import Card from '../Card'
import styles from './styles'
import TinderCard from 'react-tinder-card'

export default function SwipeableCardStack(props) {
  const { movies, outOfFrame, refs } = props

  return (
    <View style={styles.container}>
      {movies.map((movie, i) => (
        <TinderCard
          ref={refs[i]}
          key={i}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={(dir) => outOfFrame(dir, movie.id)}>
          <Card movie={movie}></Card>
        </TinderCard>
      ))}
    </View>
  )
}
