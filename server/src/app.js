import express from 'express'
import session from 'express-session'
import cors from 'cors'
import morgan from 'morgan'
import { SESSION_OPTIONS } from './config/index.js'
import { users, auth, movies } from './api/routes/index.js'

export const createApp = (store) => {
  const app = express()
  //middleware
  app.use(cors())
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(session({ ...SESSION_OPTIONS, store }))

  //ngix
  app.set('trust proxy', 1)

  //routes
  app.use('/api/', auth)
  app.use('/api/movies', movies)
  app.use('/api/users', users)

  //404 - no route in use
  app.use('*', (req, res, next) =>
    res.status(404).json({ error: 'page not found' })
  )

  return app
}
