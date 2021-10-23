const getUsers = async ({ filters = null, page = 0, limit = 20 } = {}) => {
  try {
    return { message: 'get users' }
  } catch (error) {
    console.error(error)
    throw Error
  }
}

const DAO = { getUsers }
export default DAO
