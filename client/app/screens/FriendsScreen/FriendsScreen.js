import React, { useEffect, useState } from 'react'
import { getFriends } from '../../api'
import Screen from '../../components/Screen'
import styles from './styles'
import UserCard from '../../components/UserCard/UserCard'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function FriendsScreen({ navigation }) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    getMyFriends()
  }, [])

  const getMyFriends = async () => {
    const friends = await getFriends()
    if (!friends.ok) return
    setFriends(friends.data)
  }

  const onPress = (user) => {
    navigation.navigate('FriendProfile', user)
  }

  return (
    <Screen style={styles.container}>
      {friends &&
        friends.map((user) => {
          return (
            <TouchableWithoutFeedback key={user.id}>
              <UserCard user={user} onPress={onPress} />
            </TouchableWithoutFeedback>
          )
        })}
    </Screen>
  )
}
