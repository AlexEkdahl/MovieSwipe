import crypto from 'crypto-js'
import dotenv from 'dotenv'
dotenv.config()

const SECRET = process.env.PWD_SEC

const encrypt = (password) => {
  return crypto.AES.encrypt(password, SECRET)
}

const decrypt = (password) => {
  const decryptPassword = crypto.AES.decrypt(password, SECRET)
  return decryptPassword.toString(crypto.enc.Utf8)
}

export { encrypt, decrypt }
