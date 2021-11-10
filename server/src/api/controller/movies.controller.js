import { Movie } from '../models/index.js'

const apiGetMovies = async (req, res) => {
  const { page, limit } = req.query
  const uid = req.session.userId

  try {
    const movies = await Movie.findNonRelated({ page, limit, uid })
    res.status(200).json({ movies })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error })
  }
}

const controller = {
  apiGetMovies,
}

export default controller
