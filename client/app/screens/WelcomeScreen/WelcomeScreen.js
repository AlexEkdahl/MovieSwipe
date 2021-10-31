import React from 'react'
import { ImageBackground, View, Image } from 'react-native'
import styles from './styles'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText/AppText'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <AppText style={styles.text}>Swipe away</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color='secondary' />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen
