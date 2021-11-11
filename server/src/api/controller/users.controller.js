import { User, Movie } from '../models/index.js'
import { encrypt } from '../../util/index.js'
import { RELATION_NAMES } from '../../config/index.js'

const apiGetUsers = async (req, res) => {
  const { search: username, userId } = req.query
  const uid = userId ? userId : req.session.userId
  try {
    const users = await User.find({ username, uid })
    res.status(200).json(users)
  } catch (error) {
    console.error(error.message)
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
    switch (type) {
      case 'dislikes':
        await user.setRelation(nodeId, RELATION_NAMES.DISLIKES)
        break
      case 'likes':
        await user.setRelation(nodeId, RELATION_NAMES.LIKES)
        break
      case 'friends':
        await user.setRelation(nodeId, RELATION_NAMES.FRIENDS)
        break
      default:
        throw new Error('Invalid relation type')
    }

    res.status(200).json({ message: `rel ${type}` })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiGetUserFriends = async (req, res) => {
  const id = req.session.userId
  try {
    const friends = await User.relations({
      rel: RELATION_NAMES.FRIENDS,
      id,
    })
    const request = friends.map((friend) => {
      return {
        id: friend.id,
        username: friend.username,
      }
    })
    res.status(200).json(request)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const apiGetMatchingMovies = async (req, res) => {
  const friendId = req.params.id
  const id = req.session.userId
  try {
    const movies = await Movie.matchingMovies({ me: id, id: friendId })
    res.status(200).json(movies)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const controller = {
  apiAddRelation,
  apiDeleteUser,
  apiGetUsers,
  apiGetUserFriends,
  apiUpdateUser,
  apiGetMatchingMovies,
}

export default controller
