import client from './client'

export const login = async (email, password) => {
  let res = await fetch('http://localhost:8888/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  res = await res.json()
  return res
}
