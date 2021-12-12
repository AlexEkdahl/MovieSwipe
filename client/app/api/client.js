import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://localhost:8888/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
