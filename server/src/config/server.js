import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import users from '../api/routes/users.routes.js'
import connectMongoDB from '../middleware/db/connect.mongodb.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 4000
const MONGODB_URL = process.env.MONGODB_URL
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/users', users)

//404 - no route in use
app.use('*', (req, res, next) =>
  res.status(404).json({ error: 'page not found' })
)

//start server
const start = async () => {
  try {
    await connectMongoDB(MONGODB_URL)
    app.listen(PORT, () => {
      console.log(`SERVER RUNNING ON PORT: ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

export default start
