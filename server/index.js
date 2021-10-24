import dotenv from 'dotenv'
import { app } from './src/config/server.js'
import connectMongoDB from './src/config/mongodb.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const MONGODB_URL = process.env.MONGODB_URL

try {
  await connectMongoDB(MONGODB_URL)
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`)
  })
} catch (error) {
  console.error(error)
}
