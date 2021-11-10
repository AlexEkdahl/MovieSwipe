import React, { useEffect, useState } from 'react'
import { getFriends } from '../../api'
import Screen from '../../components/Screen'
import styles from './styles'
import UserCard from '../../components/UserCard/UserCard'

export default function FriendsScreen() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const getMyFriends = async () => {
      const friends = await getFriends()
      if (!friends.ok) return
      setFriends(friends.data)
    }
    getMyFriends()
  }, [])

  return (
    <Screen style={styles.container}>
      {friends &&
        friends.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
    </Screen>
  )
}
