import React from 'react'
import { DEFAULT_POSTER_URL } from '../../config'
import styled from 'styled-components'

export const SwipeCard = styled.View`
  margin-top: 30px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 280px;
  height: 500px;
  shadow-color: black;
  shadow-opacity: 0.1;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`

export const CardTitle = styled.Text`
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: red;
`

function Card(props) {
  const { title, plot, poster = DEFAULT_POSTER_URL } = props.movie
  return (
    <SwipeCard>
      <CardImage source={{ uri: poster }}>
        <CardTitle>{title}</CardTitle>
      </CardImage>
    </SwipeCard>
  )
}

export default Card
