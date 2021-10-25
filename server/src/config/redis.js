import Redis from 'ioredis'
// import connectRedis from 'connect-redis'

let client
const getRedis = () => {
  if (client) return client
  client = new Redis()
  console.log('CONNECTED TO REDIS')

  return client
}

export default getRedis
