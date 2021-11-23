import React, { useState, useEffect, useMemo } from 'react'
import { View } from 'react-native'
import { getMovies, connectToMovie } from '../../api'
import SwipeableCardStack from '../../components/SwipeableCardStack'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import styles from './styles'

const SwipeScreen = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  const refs = useMemo(
    () =>
      Array(movies.length)
        .fill(0)
        .map((i) => React.createRef()),
    [movies]
  )

  useEffect(() => {
    const func = async () => {
      if (!movies.length) {
        setLoading(true)
        await fetchMovies()
      }
    }
    func()
  }, [movies])

  const fetchMovies = async () => {
    setLoading(true)
    const res = await getMovies({ page })
    setPage(page + 1)

    setMovies(res.data.movies)
    setLoading(false)
  }

  const outOfFrame = async (dir, id) => {
    setMovies((old) => {
      return old.filter((movie) => movie.id !== id)
    })
    if (dir === 'right') {
      const res = await connectToMovie(id, 'likes')
    } else {
      const res = await connectToMovie(id, 'dislikes')
    }
  }

  const swipe = (dir) => {
    if (movies.length < 1) {
      return
    }
    refs[movies.length - 1].current.swipe(dir) // Swipe the card!
  }

  return (
    <>
      <Screen style={styles.container}>
        <Loading visible={loading} />
        <SwipeableCardStack
          movies={movies}
          outOfFrame={outOfFrame}
          refs={refs}
        />
      </Screen>
      <View style={styles.bottonContainer}>
        <Button
          style={styles.botton}
          onPress={() => swipe('left')}
          title='<-'
        />
        <Button
          style={styles.botton}
          onPress={() => swipe('right')}
          title='->'
        />
      </View>
    </>
  )
}

export default SwipeScreen
