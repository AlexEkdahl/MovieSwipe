import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../../components/Screen'
import { ListItem } from '../../components/lists'

const initialMessages = [
  {
    id: 1,
    title: 'Mosh Hamedani',
    description: 'Hey! Is this item still available?',
    image: require('../../assets/dinesh.jpg'),
  },
  {
    id: 2,
    title: 'Mosh Hamedani',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../../assets/dinesh.jpg'),
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../../assets/dinesh.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen
