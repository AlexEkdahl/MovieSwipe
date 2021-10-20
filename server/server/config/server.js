import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import users from '../api/routes/users.routes.js'

const server = express()

//middleware
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

server.use('/api/v1/', users)
server.use('*', (req, res, next) =>
  res.status(404).json({ error: 'page not found' })
)

export default server
