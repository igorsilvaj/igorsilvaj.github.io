import axios from 'axios'
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = 'https://backend-portfolio-evzm.onrender.com'

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})
