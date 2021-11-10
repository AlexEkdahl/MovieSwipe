import client from './client'

export const connectToMovie = async (id, type) => {
  return await client.post('/users/connect', { nodeId: id, type })
}
