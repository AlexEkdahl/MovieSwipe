import User from '../models/user.model.js'
import { encrypt, decrypt, generateToken } from '../../util/crypt.js'
import { validateEmail } from '../../util/validate.js'

const apiRegisterUser = async (req, res) => {
  try {
    const { username, password, email, admin } = req.body

    if (!username || !password || !email || !validateEmail(email)) {
      return res.status(400).json({ message: 'Missing parameters' })
    }

    const newUser = new User({
      username,
      password: encrypt(password),
      email,
      admin,
    })
    const savedUser = await newUser.save()

    res.status(201).json({ message: 'OK' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiLoginUser = async (req, res) => {
  const { username, password } = req.body
  console.log('req.session :>> ', req.session)
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing parameters' })
  }

  try {
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(403).json({ message: 'Bad credentials' })
    }

    //decrypt
    const decryptedPassword = decrypt(user.password)
    if (decryptedPassword !== password) {
      return res.status(403).json({ message: 'Bad credentials' })
    }

    //dto
    const { _id: id, username: name, email, admin } = user._doc
    // const accessToken = generateToken(id, admin)
    req.session.user = id
    res.status(200).json({
      id,
      username: name,
      email,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

//playing with sessions
const apiWhoAmI = async (req, res) => {
  const userId = req.session.user
  if (!userId) return res.status(403).json({ message: 'Unauthorized' })

  try {
    const user = await User.findById(userId)
    if (!user) return res.status(403).json({ message: 'Unauthorized' })
    const { _id: id, username: name, email, admin } = user._doc
    res.status(200).json({
      id,
      username: name,
      email,
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
}

export default auth
