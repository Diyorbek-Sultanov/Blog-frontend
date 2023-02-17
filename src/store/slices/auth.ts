import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
	const { data } = await axios.post('/users')

	return data
})

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
	reducers: {
		signInStart(state) {
			state.status = Status.LOADING
		},
	},
})

export const { signInStart } = AuthSlice.actions

export default AuthSlice.reducer
