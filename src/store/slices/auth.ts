import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { UserT } from './../../pages/Register'
import { User } from './../../service/auth'
import authService from '../../service/auth'
import { addLocalStorage } from './../../utils/addStorage'

export const fetchUser = createAsyncThunk<User, UserT>(
	'user/fetchUser',
	async user => {
		const data = await authService.userRegister(user)
		return data.user
	},
)

export const fetchUserLogin = createAsyncThunk<User, UserT>(
	'user/fetchUserLogin',
	async user => {
		const data = await authService.userLogin(user)
		return data.user
	},
)

export const fetchUserGet = createAsyncThunk<User>(
	'user/fetchUserGet',
	async () => {
		const data = await authService.getUser()
		return data.user
	},
)

enum Status {
	IDLE = ' idle',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface IAuth {
	status: Status
	user: User
	loggedIn: boolean
}

const initialState: IAuth = {
	status: Status.IDLE,
	user: {} as User,
	loggedIn: false,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.user = {} as User
			state.loggedIn = false
		},
	},
	extraReducers: builder => {
		// ? Register
		builder.addCase(fetchUser.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(
			fetchUser.fulfilled,
			(state, action: PayloadAction<User>) => {
				state.loggedIn = true
				state.status = Status.SUCCESS
				state.user = action.payload
				addLocalStorage('token', action.payload.token)
			},
		)
		builder.addCase(fetchUser.rejected, state => {
			state.status = Status.ERROR
			state.loggedIn = false
		})
		// ? Login
		builder.addCase(fetchUserLogin.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(
			fetchUserLogin.fulfilled,
			(state, action: PayloadAction<User>) => {
				state.loggedIn = true
				state.status = Status.SUCCESS
				state.user = action.payload
				addLocalStorage('token', action.payload.token)
			},
		)
		builder.addCase(fetchUserLogin.rejected, state => {
			state.status = Status.ERROR
			state.loggedIn = false
		})
		// ? GetUser
		builder.addCase(fetchUserGet.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(
			fetchUserGet.fulfilled,
			(state, action: PayloadAction<User>) => {
				state.status = Status.SUCCESS
				state.user = action.payload
				state.loggedIn = true
			},
		)
		builder.addCase(fetchUserGet.rejected, state => {
			state.status = Status.ERROR
			state.loggedIn = false
		})
	},
})

export const { logout } = AuthSlice.actions

export default AuthSlice.reducer
