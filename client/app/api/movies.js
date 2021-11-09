import client from './client'

export const getMovies = async ({ page = 0, limit = 10 }) => {
  const query = `?page=${page}&limit=${limit}`
  return await client.get(`/movies${query}`)
}
