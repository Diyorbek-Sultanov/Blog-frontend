import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useAppDispatch } from './app/hooks/useAppDispatch'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { fetchUserGet } from './store/slices/auth'
import { getItem } from './utils/getStorage'

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const getUser = () => {
		try {
			const token = getItem('token')

			if (token) {
				dispatch(fetchUserGet())
			} else {
				navigate('/login')
			}
		} catch (error) {
			console.log(error)
		}
	}

	React.useEffect(() => {
		getUser()
	}, [])

	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Route>
		</Routes>
	)
}

export default App
