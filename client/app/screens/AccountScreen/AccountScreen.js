import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem } from '../../components/lists'
import Icon from '../../components/Icon'
import Screen from '../../components/Screen'
import styles from './styles'
import menuItems from './menuItems'
import { AuthContext, removeUser } from '../../auth'
import { logout } from '../../api'

export default function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext)

  const handleOnPress = async () => {
    const result = await logout()
    if (!result.ok) return
    setUser(null)
    removeUser()
  }
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.username}
          subTitle={user.email}
          image={require('../../assets/dinesh.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                newScreen={true}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )
          }}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={handleOnPress}
      />
    </Screen>
  )
}
