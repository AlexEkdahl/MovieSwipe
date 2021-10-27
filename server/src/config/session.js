import { IN_PROD } from './app.js'
const TEN_MINUTES = 1000 * 60 * 10

const {
  SESSION_SECRET = 'secret',
  SESSION_NAME = 'sid',
  SESSION_LIFETIME = TEN_MINUTES,
} = process.env

export const SESSION_OPTIONS = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: SESSION_LIFETIME,
    secure: IN_PROD,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false,
}
