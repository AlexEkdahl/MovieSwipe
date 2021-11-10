import { User } from '../models/index.js'
import { encrypt } from '../../util/index.js'
import { RELATION_NAMES } from '../../config/index.js'

const apiGetUsers = async (req, res) => {
  try {
    res.status(200).json({ users: [] })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiUpdateUser = async (req, res) => {
  const id = req.params.id
  const { username, password, email, admin } = req.body
  const params = {}

  //populate params
  if (password) params.password = encrypt(password)
  if (email) params.email = email
  if (username) params.username = username
  if (req.session.admin && admin) params.admin = admin

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: params,
      },
      { new: true }
    )

    const { _id, username: name, email } = updatedUser._doc
    res.status(200).json({
      id: _id,
      username: name,
      email,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiDeleteUser = async (req, res) => {
  try {
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiAddRelation = async (req, res) => {
  const { nodeId, type, userId } = req.body
  const id = userId ? userId : req.session.userId
  try {
    const user = await User.findOne({ id })
    if (type === 'dislikes') {
      await user.setRelation(nodeId, RELATION_NAMES.DISLIKES)
    } else {
      await user.setRelation(nodeId, RELATION_NAMES.LIKES)
    }

    res.status(200).json({ message: `rel ${type}` })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const controller = {
  apiGetUsers,
  apiUpdateUser,
  apiDeleteUser,
  apiAddRelation,
}

export default controller
