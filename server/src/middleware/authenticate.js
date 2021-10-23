import { verifyToken } from '../util/crypt.js'

const verify = (req, res, next) => {
  const token = req.headers.token
  if (!token) {
    return res
      .status(401)
      .json({ message: 'A token is required for authentication' })
  }

  try {
    const user = verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Token is not valid' })
  }
}

const verifyAndAuthorize = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next()
    } else {
      res.status(403).json({ message: 'Unauthorized' })
    }
  })
}

const verifyAndAdminAuthorize = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.admin) {
      next()
    } else {
      res.status(403).json({ message: 'Unauthorized' })
    }
  })
}

export { verify, verifyAndAuthorize as auth, verifyAndAdminAuthorize as admin }
