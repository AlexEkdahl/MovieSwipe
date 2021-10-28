import { SESSION_NAME } from '../config/index.js'

export const logIn = (req, { id, admin }) => {
  req.session.userId = id
  req.session.admin = admin
}

export const isLoggedIn = (req) => {
  return !!req.session.userId
}

export const logOut = (req, res) => {
  return new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err)
      res.clearCookie(SESSION_NAME)
      resolve()
    })
  })
}
