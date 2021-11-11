import React from 'react'
import LottieView from 'lottie-react-native'

export default function Loading({ visible }) {
  return (
    <>
      {visible && (
        <LottieView
          autoPlay={true}
          loop={true}
          source={require('../../assets/animations/movie_load.json')}
        />
      )}
    </>
  )
}
