import React from 'react'
import { View } from 'react-native'
import Card from '../components/Card/Card'
import Header from '../components/Header'

export default function SwipeScreen() {
  return (
    <View>
      <Header />
      <Card
        image='https://images.hdqwalls.com/wallpapers/thumb/batman-last-chance-5k-dy.jpg'
        plot='This is'
        title='holla'
      />
    </View>
  )
}
