import { Movie } from '../models/index.js'

const apiGetSwipeableMovies = async (req, res) => {
  const { page, limit } = req.query
  const uid = req.session.userId

  try {
    const movies = await Movie.findNonRelatedMovies({ page, limit, uid })
    res.status(200).json({ movies })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
}

const apiGetLikedMovies = async (req, res) => {
  const id = req.session.userId
  try {
    const movies = await Movie.likedMovies({ id })
    res.status(200).json(movies)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const controller = {
  apiGetSwipeableMovies,
  apiGetLikedMovies,
}

export default controller
