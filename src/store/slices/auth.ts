import { UserT } from './../../pages/Register'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IUser } from './../../service/auth'
import authService from '../../service/auth'

export const fetchUser = createAsyncThunk<IUser, UserT>(
	'user/fetchUser',
	async user => {
		const data = await authService.userRegister(user)

		return data
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
	user: null
	loggedIn: boolean
}

const initialState: IAuth = {
	status: Status.IDLE,
	user: null,
	loggedIn: false,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchUser.fulfilled, state => {
			state.loggedIn = true
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchUser.rejected, state => {
			state.status = Status.ERROR
			state.status = Status.IDLE
		})
	},
})

export default AuthSlice.reducer
