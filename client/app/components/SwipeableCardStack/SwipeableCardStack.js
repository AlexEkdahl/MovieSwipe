import React, { useMemo } from 'react'
import { View } from 'react-native'
import Card from '../Card'
import styles from './styles'
import TinderCard from 'react-tinder-card'

export default function SwipeableCardStack(props) {
  const { movies, outOfFrame, swiped } = props

  const refs = useMemo(
    () =>
      Array(movies.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )
  return (
    <View style={styles.container}>
      {movies.map((movie, i) => (
        <TinderCard
          ref={refs[i]}
          key={movie._id}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={(dir) => outOfFrame(dir, movie._id)}
          onSwipe={(dir) => swiped(dir, movie.title)}>
          <Card movie={movie}></Card>
        </TinderCard>
      ))}
    </View>
  )
}
