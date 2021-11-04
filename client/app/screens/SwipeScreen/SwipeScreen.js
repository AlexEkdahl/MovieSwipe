import React, { useState, useEffect } from 'react'
import SwipeableCardStack from '../../components/SwipeableCardStack'
import { View } from 'react-native'

const alreadyRemoved = []

const SwipeScreen = () => {
  const [movies, setMovies] = useState([])
  const [likedMovies, setLikedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const [lastDirection, setLastDirection] = useState()

  useEffect(() => {
    if (!movies.length) {
      fetchData()
    }
  }, [movies])

  const fetchData = async () => {
    setLoading(true)
    const page = Math.floor(Math.random() * 500)
    const req = await fetch(
      `https://movie-swipe-backend.herokuapp.com/api/v1/movies?page=${page}&limit=8`
    )
    let res = await req.json()
    setMovies(res.moviesList)
    setLoading(false)
  }

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (dir, id) => {
    setMovies((old) => {
      return old.filter((char) => char._id !== id)
    })
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
