import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import { connectNeo4jDB } from './db/neo4j.js'
import { REDIS_OPTIONS, APP_PORT, NEO_URI } from './config/index.js'
import { createApp } from './app.js'

try {
  const RedisStore = connectRedis(session)
  const client = new Redis(REDIS_OPTIONS)
  const store = new RedisStore({ client })
  const app = createApp(store)
  await connectNeo4jDB(NEO_URI)
  app.listen(APP_PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${APP_PORT}`)
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}
