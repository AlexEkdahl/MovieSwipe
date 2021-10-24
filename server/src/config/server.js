import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import users from '../api/routes/users.routes.js'
import auth from '../api/routes/auth.routes.js'
dotenv.config()

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/', users)
app.use('/api/', auth)

//404 - no route in use
app.use('*', (req, res, next) =>
  res.status(404).json({ error: 'page not found' })
)

export { app }
