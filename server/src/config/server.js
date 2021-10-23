import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import users from '../api/routes/users.routes.js'

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/users', users)
app.use('*', (req, res, next) =>
  res.status(404).json({ error: 'page not found' })
)

export default app
