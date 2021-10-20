import server from './server/config/server.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`listening on port ${port}`)
})
