import client from './client'

export const likeMovie = async (id) => {
  return await client.post('/users/connect', { movieId: id })
}
