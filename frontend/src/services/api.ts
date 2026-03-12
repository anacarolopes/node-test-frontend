import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vigilant-dollop-vg7r5xr6jr7cx9rg-3000.app.github.dev'
})

export default api