import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.0.213:8888/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
