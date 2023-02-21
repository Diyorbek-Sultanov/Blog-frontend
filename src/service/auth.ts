import axios from './axios.config'
import { UserT } from './../pages/Register'

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

const AuthService = {
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

export default AuthService
