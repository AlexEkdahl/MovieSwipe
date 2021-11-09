import client from './client'

// export const login = async (email, password) => {
//   let res = await fetch('http://localhost:8888/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password }),
//   })

//   res = await res.json()
//   return res
// }

export const login = async (email, password) => {
  return await client.post('/login', { email, password })
}
export const register = async (email, password, username) => {
  return await client.post('/register', { email, password, username })
}

export const logout = async () => {
  return await client.post('/logout')
}

export const whoami = async () => {
  return await client.get('/whoami')
}
