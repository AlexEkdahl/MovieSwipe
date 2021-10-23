import User from '../models/user.model.js'
import { encrypt } from '../../util/crypt.js'

const apiGetUsers = async (req, res) => {
  try {
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiUpdateUser = async (req, res) => {
  const id = req.params.id
  const { password, email, admin } = req.body
  const params = {}

  //populate params
  if (password) params.password = encrypt(password)
  if (email) params.email = email
  if (req.user.admin && admin) params.admin = admin

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: params,
      },
      { new: true }
    )

    const { _id: id, username: name, email } = updatedUser._doc
    res.status(200).json({
      id,
      username: name,
      email,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiDeleteUser = async (req, res) => {
  try {
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const controller = {
  apiGetUsers,
  apiUpdateUser,
  apiDeleteUser,
}

export default controller
