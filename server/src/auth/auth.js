import User from '../api/models/user.model.js'
import { encrypt, decrypt } from '../util/crypt.js'

const apiRegisterUser = async (req, res) => {
  const { username, password, email, admin } = req.body

  if (!username || !password || !email) {
    res.status(400).json({ message: 'Missing parameters', success: false })
  }

  try {
    const newUser = new User({
      username,
      password: encrypt(password),
      email,
      admin,
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({ msg: 'Error' })
  }
}

const apiLoginUser = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Missing parameters', success: false })
  }

  try {
    const user = await User.findOne({ username })
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Bad credentials', success: false })
    }

    const decryptedPassword = decrypt(user.password)
    if (decryptedPassword !== password) {
      return res
        .status(401)
        .json({ message: 'Bad credentials', success: false })
    }

    const { id, username: name, admin, email } = user._doc
    res.status(200).json({ id, username: name, admin, email })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Error' })
  }
}

const auth = {
  apiRegisterUser,
  apiLoginUser,
}

export default auth
