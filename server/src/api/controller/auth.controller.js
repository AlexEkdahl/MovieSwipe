import { User } from '../models/index.js'
import { encrypt } from '../../util/index.js'
import { validateEmail, logIn, logOut } from '../../validation/index.js'

const apiRegisterUser = async (req, res) => {
  try {
    const { username, password, email, admin } = req.body

    if (!username || !password || !email || !validateEmail(email)) {
      return res.status(400).json({ message: 'Missing parameters' })
    }

    const found = await User.exists({ email })
    if (found) {
      console.log('found :>> ', found)
      return res.status(400).json({ message: 'Invalid email' })
    }
    const user = await User.create({
      username,
      password: encrypt(password),
      email,
      admin,
    })

    logIn(req, user)

    res.status(201).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiLoginUser = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing parameters' })
  }

  try {
    const user = await User.findOne({ username })
    if (!user || !user.matchesPassword(password)) {
      return res.status(401).json({ message: 'Bad credentials' })
    }

    //dto
    const { _id: id, username: name, email, admin } = user._doc
    // const accessToken = generateToken(id, admin)
    logIn(req, user)
    res.status(200).json({
      id,
      username: name,
      email,
      admin,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}
const apiLogoutUser = async (req, res) => {
  try {
    await logOut(req, res)
    res.json({ message: 'OK' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

//playing with sessions
const apiWhoAmI = async (req, res) => {
  const userId = req.session.userId
  try {
    const user = await User.findById(userId)
    if (!user) return res.status(403).json({ message: 'Unauthorized' })
    const { _id: id, username: name, email, admin } = user._doc
    res.status(200).json({
      id,
      username: name,
      email,
      admin,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const auth = {
  apiRegisterUser,
  apiLoginUser,
  apiWhoAmI,
  apiLogoutUser,
}

export default auth
