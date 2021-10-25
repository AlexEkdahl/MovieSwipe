import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import session from 'express-session'
import users from '../api/routes/users.routes.js'
import auth from '../api/routes/auth.routes.js'
import connectRedis from 'connect-redis'
import getRedis from './redis.js'

const app = express()
const RedisStore = connectRedis(session)
const client = getRedis()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(
  session({
    store: new RedisStore({ client }),
    resave: false,
    secret: 'test',
    saveUninitialized: true,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 10, // session max age in miliseconds
    },
  })
)

//ngix
app.set('trust proxy', 1)

//routes
app.use('/api/', users)
app.use('/api/', auth)

//404 - no route in use
app.use('*', (req, res, next) =>
  res.status(404).json({ error: 'page not found' })
)

export { app }
