import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://localhost:8888/api',
})

export default apiClient
