import Movie from '../models/movie/movie.model.js'

const apiGetMovies = async (req, res) => {
  const { page, limit } = req.query
  try {
    const movies = await Movie.find({ page, limit })
    movies.forEach(async (movie) => {
      movie.parseIMDB()
    })
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
