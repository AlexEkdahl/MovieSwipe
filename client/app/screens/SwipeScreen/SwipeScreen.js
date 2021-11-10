import React, { useState, useEffect } from 'react'
import SwipeableCardStack from '../../components/SwipeableCardStack'
import { View } from 'react-native'
import { getMovies, connectToMovie } from '../../api'

const alreadyRemoved = []

const SwipeScreen = () => {
  const [movies, setMovies] = useState([])
  const [likedMovies, setLikedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const [lastDirection, setLastDirection] = useState()

  useEffect(() => {
    if (!movies.length) {
      fetchMovies()
    }
  }, [movies])

  const fetchMovies = async () => {
    const page = Math.floor(Math.random() * 500)
    // setLoading(true)
    const res = await getMovies({ page })
    setMovies(res.data.movies)
    // setLoading(false)
  }

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
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

  // const swipe = (dir) => {
  //   const cardsLeft = movies.filter(
  //     (person) => !alreadyRemoved.includes(person.name)
  //   )
  //   if (cardsLeft.length) {
  //     const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
  //     const index = db.map((person) => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
  //     alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
  //     childRefs[index].current.swipe(dir) // Swipe the card!
  //   }
  // }

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <SwipeableCardStack
        movies={movies}
        outOfFrame={outOfFrame}
        swiped={swiped}
      />

      {/* <AppButton onPress={() => swipe('left')} title='Swipe left!' />
      <AppButton onPress={() => swipe('right')} title='Swipe right!' /> */}
    </View>
  )
}

export default SwipeScreen
