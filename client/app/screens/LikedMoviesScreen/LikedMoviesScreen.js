import React, { useState, useEffect } from 'react'
import { getLikedMovies } from '../../api/movies'
import { Form, FormField, ErrorMessage } from '../../components/forms'
import { sendFriendRequest } from '../../api'
import Screen from '../../components/Screen'
import UserCard from '../../components/UserCard/UserCard'
import styles from './styles'

export default function LikedMovieScreen() {
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const a = async () => {
      const movies = await getLikedMovies()
      console.log('movies.data :>> ', movies.data)
    }

    a()
  }, [])

  const handleShowError = (data) => {
    if (data.length === 0) {
      setTimeout(() => {
        setShowError(true)
      }, 1000)
      setShowError(false)
    }
  }
  return (
    <Screen style={styles.container}>
      {/* {movies &&
        movies.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              friendRequest={() => friendRequestHandler(user)}
            />
          )
        })} */}
    </Screen>
  )
}
