import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { ListItem } from '../lists'
import { sendFriendRequest } from '../../api/users'

export default function UserCard({ user, navigation }) {
  const friendRequestHandler = async () => {
    const res = await sendFriendRequest(user.id)
    console.log(res.data)
  }
  return (
    <View style={styles.container}>
      <ListItem
        title={user.username}
        image={require('../../assets/dinesh.jpg')}
        friendRequest={friendRequestHandler}
      />
    </View>
  )
}
