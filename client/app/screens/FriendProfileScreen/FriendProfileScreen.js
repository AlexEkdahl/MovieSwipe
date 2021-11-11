import React, { useEffect, useState } from 'react'
import { getMatchedMovies } from '../../api'
import { ListItem } from '../../components/lists'
import Screen from '../../components/Screen'

export default function FriendProfileScreen({ route }) {
  const friend = route.params
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const response = await getMatchedMovies(friend.id)
    if (!response.ok) return
    setMovies(response.data)
  }

  return (
    <Screen>
      <ListItem
        title={friend.username}
        titleStyle={{ fontSize: 17 }}
        subTitle='offline'
        image={require('../../assets/dinesh.jpg')}
      />
      {movies &&
        movies.map((movie, idx) => {
          return (
            <ListItem
              key={movie.id + idx}
              title={movie.title}
              titleStyle={{ fontSize: 17 }}
              subTitle={`IMDB: ${movie.imdb}`}
            />
          )
        })}
    </Screen>
  )
}
