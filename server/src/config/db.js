const {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_HOST = 'localhost',
  MONGO_PORT = '20217',
  MONGO_DATABASE = 'dev',
} = process.env

export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`
