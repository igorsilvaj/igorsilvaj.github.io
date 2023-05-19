import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = 'https://backend-portfolio-evzm.onrender.com'
// const BASE_URL = 'http://localhost:3001'

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

const token = Cookies.get('token')
if (token !== undefined) api.defaults.headers.Authorization = `Bearer ${token}`

api.interceptors.request.use()

export default api
