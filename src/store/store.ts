import { configureStore } from '@reduxjs/toolkit'
import Auth from './slices/auth'

const store = configureStore({
	reducer: {
		Auth,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
