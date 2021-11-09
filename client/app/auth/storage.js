import * as SecureStore from 'expo-secure-store'

export const storeUser = async (user) => {
  try {
    await SecureStore.setItemAsync('user', JSON.stringify(user))
  } catch (error) {
    console.error('Error storing user')
  }
}

export const getUser = async () => {
  try {
    const user = await SecureStore.getItemAsync('user')

    return JSON.parse(user)
  } catch (error) {
    console.log('Error getting user')
  }
}

export const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync('user')
  } catch (error) {
    console.log('Error deleting user')
  }
}
