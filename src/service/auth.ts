import axios, { InternalAxiosRequestConfig } from 'axios'

import { UserT } from './../pages/Register'
import { getItem } from './../utils/getStorage'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = getItem('token')
	const authorazition = token ? `Token ${token}` : ''
	config.headers.Authorization = authorazition

	return config
})

export interface User {
	id: string
	email: string
	username: string
	image: string
	bio: string
	createdAt: Date
	updatedAt: Date
	token: string
}

export interface IUser {
	user: User
}

const authService = {
	async userRegister(user: UserT) {
		const { data } = await axios.post<IUser>('/users', { user })

		return data
	},

	async userLogin(user: UserT) {
		const { data } = await axios.post<IUser>('/users/login', { user })

		return data
	},

	async getUser() {
		const { data } = await axios.get<IUser>('/user')

		return data
	},
}

export default authService
