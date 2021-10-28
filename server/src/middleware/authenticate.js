import { isLoggedIn, isAdmin, isAuth } from '../validation/index.js'

export const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return res.status(400).json({ message: 'You are already logged in' })
  }

  next()
}

export const member = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return res.status(400).json({ message: 'You must be logged in' })
  }

  next()
}

export const admin = (req, res, next) => {
  if (!isAdmin(req)) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  next()
}

export const verify = (req, res, next) => {
  if (!isAuth(req)) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  next()
}
