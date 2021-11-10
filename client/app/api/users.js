import client from './client'

export const connectToMovie = async (id, type) => {
  return await client.post('/users/connect', { nodeId: id, type })
}

export const getUsers = async (param) => {
  return await client.get(`/users${param && `?search=${param}`}`)
}

export const sendFriendRequest = async (friendId) => {
  return await client.post(`/users/connect`, {
    nodeId: friendId,
    type: 'friends',
  })
}

export const getFriends = async () => {
  return await client.get('/users/friends')
}
