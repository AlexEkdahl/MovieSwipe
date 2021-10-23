import User from '../models/user.model.js'

const apiGetUsers = async (req, res, next) => {
  try {
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiUpdateUser = async (req, res, next) => {
  try {
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiDeleteUser = async (req, res, next) => {
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
