import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App: React.FC = () => {
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
