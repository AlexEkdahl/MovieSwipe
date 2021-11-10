import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://127.0.0.1:8888/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
