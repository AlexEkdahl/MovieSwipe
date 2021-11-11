import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.10.177:8888/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
