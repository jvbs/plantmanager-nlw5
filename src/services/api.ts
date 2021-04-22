import axios from 'axios'

const api = axios.create({
  // recommended to get your own IP Address
  baseURL: 'http://192.168.102.248:3333'
})

export default api