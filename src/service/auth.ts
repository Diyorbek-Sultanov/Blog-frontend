import axios from 'axios'

import { UserT } from './../pages/Register'

axios.defaults.baseURL = 'http://localhost:3000/api'

export interface IUser {
	updatedAt: Date
	createdAt: Date
	bio: string
	image: string
	username: string
	email: string
	id: string
	token: string
}

const authService = {
	async userRegister(user: UserT) {
		const { data } = await axios.post<IUser>('/users', { user })

		return data
	},
}

export default authService
