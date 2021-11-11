import React from 'react'
import { ImageBackground, View, Image } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
import Text from '../../components/Text/Text'

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.text}>Swipe away</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
        <Button
          title='Register'
          onPress={() => navigation.navigate('Register')}
          color='secondary'
        />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen
