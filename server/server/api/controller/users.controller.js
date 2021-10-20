import UsersDAO from '../dao/users.DAO.js'

export default class UsersController {
  static async apiGetUsers(req, res, next) {
    try {
      const response = await UsersDAO.getUsers()
      res.status(400).json(response)
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}
