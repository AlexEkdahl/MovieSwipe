import crypto from 'crypto-js'
import jwt from 'jsonwebtoken'

const { CRYPT_SECRET, JWT_SECRET } = process.env

const encrypt = (password) => {
  return crypto.AES.encrypt(password, CRYPT_SECRET).toString()
}

const decrypt = (password) => {
  const decryptPassword = crypto.AES.decrypt(password, CRYPT_SECRET)
  return decryptPassword.toString(crypto.enc.Utf8)
}

const compare = (password, decryptedPassword) => {
  return password === decrypt(decryptedPassword)
}

const generateToken = (id, admin) => {
  return jwt.sign({ id, admin }, JWT_SECRET, { expiresIn: '1d' })
}

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

export { encrypt, compare, generateToken, verifyToken }
