export default class UsersDAO {
  static async getUsers({ filters = null, page = 0, limit = 20 } = {}) {
    try {
      return { message: 'get users' }
    } catch (error) {
      console.error(error)
      throw Error
    }
  }
}
