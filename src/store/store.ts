import { configureStore } from '@reduxjs/toolkit'
import Auth from './slices/auth'
import Article from './slices/article'

const store = configureStore({
	reducer: {
		Auth,
		Article,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
