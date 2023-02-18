import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { UserT } from './../../pages/Register'
import { IUser } from './../../service/auth'
import authService from '../../service/auth'

export const fetchUser = createAsyncThunk<IUser, UserT>(
	'user/fetchUser',
	async user => {
		const data = await authService.userRegister(user)

		return data
	},
)

export const fetchUserLogin = createAsyncThunk<IUser, UserT>(
	'user/fetchUserLogin',
	async user => {
		const data = await authService.userLogin(user)

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
	user: IUser
	loggedIn: boolean
	error: null
}

const initialState: IAuth = {
	status: Status.IDLE,
	user: {} as IUser,
	loggedIn: false,
	error: null,
}

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// ? Register
		builder.addCase(fetchUser.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.loggedIn = true
			state.status = Status.SUCCESS
			state.user = action.payload
		})
		builder.addCase(fetchUser.rejected, state => {
			state.status = Status.ERROR
		})
		// ? Login
		builder.addCase(fetchUserLogin.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(
			fetchUserLogin.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.loggedIn = true
				state.status = Status.SUCCESS
				state.user = action.payload
			},
		)
		builder.addCase(fetchUserLogin.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export default AuthSlice.reducer
