import UsersDAO from '../dao/users.DAO.js'

const apiGetUsers = async (req, res, next) => {
  try {
    const response = await UsersDAO.getUsers()
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}
const apiPostUser = async (req, res, next) => {
  try {
    const response = await UsersDAO.getUsers()
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}
const apiUpdateUser = async (req, res, next) => {
  try {
    const response = await UsersDAO.getUsers()
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const apiDeleteUser = async (req, res, next) => {
  try {
    const response = await UsersDAO.getUsers()
    res.status(400).json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const controller = {
  apiGetUsers,
  apiPostUser,
  apiUpdateUser,
  apiDeleteUser,
}

export default controller
