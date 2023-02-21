import axios, { InternalAxiosRequestConfig } from 'axios'
import { getItem } from './../utils/getStorage'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = getItem('token')
	const authorazition = token ? `Token ${token}` : ''
	config.headers.Authorization = authorazition

	return config
})

export default axios
