import axios from 'axios'

import { UserT } from './../pages/Register'

axios.defaults.baseURL = 'http://localhost:3000/api'

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
}

export default authService
