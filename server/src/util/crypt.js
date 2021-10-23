import crypto from 'crypto-js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const CRYPT_SECRET = process.env.PWD_SEC
const JWT_SECRET = process.env.JWT_SEC

const encrypt = (password) => {
  return crypto.AES.encrypt(password, CRYPT_SECRET).toString()
}

const decrypt = (password) => {
  const decryptPassword = crypto.AES.decrypt(password, CRYPT_SECRET)
  return decryptPassword.toString(crypto.enc.Utf8)
}

const generateToken = (id, admin) => {
  return jwt.sign({ id, admin }, JWT_SECRET, { expiresIn: '1d' })
}

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

export { encrypt, decrypt, generateToken, verifyToken }
