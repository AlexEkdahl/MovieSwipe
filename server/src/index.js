import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import connectMongoDB from './db/mongodb.js'
import { REDIS_OPTIONS, APP_PORT, MONGO_URI } from './config/index.js'
import { createApp } from './app.js'

const RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)
const store = new RedisStore({ client })
const app = createApp(store)

try {
  await connectMongoDB(MONGO_URI)
  app.listen(APP_PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${APP_PORT}`)
  })
} catch (error) {
  console.error(error)
}