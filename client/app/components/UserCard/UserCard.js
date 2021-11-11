import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { ListItem } from '../lists'

export default function UserCard({
  user,
  onPress,
  friendRequest,
  newScreen = false,
}) {
  const func = onPress ? () => onPress(user) : null
  return (
    <View style={styles.container}>
      <ListItem
        title={user.username}
        image={require('../../assets/dinesh.jpg')}
        friendRequest={friendRequest}
        onPress={func}
        newScreen={newScreen}
      />
    </View>
  )
}
