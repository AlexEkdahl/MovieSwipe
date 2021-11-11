import React from 'react'
import { View, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import Text from '../../Text'
import { colors } from '../../../config'
import styles from './styles'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  newScreen = false,
  friendRequest = false,
  titleStyle,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          {friendRequest && (
            <TouchableHighlight
              underlayColor={colors.light}
              onPress={friendRequest}>
              <MaterialCommunityIcons
                name='account-plus'
                size={30}
                color={colors.primary}
              />
            </TouchableHighlight>
          )}
          {newScreen && (
            <MaterialCommunityIcons
              color={colors.medium}
              name='chevron-right'
              size={25}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem
