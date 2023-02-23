import React, { lazy, Suspense } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useAppDispatch } from './app/hooks/useAppDispatch'
import { Loader } from './components'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { fetchUserGet } from './store/slices/auth'
import { getItem } from './utils/getStorage'

const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const CreateArticle = lazy(() => import('./pages/CreateArticle'))
const EditArticle = lazy(() => import('./pages/EditArticle'))

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
				<Route
					path='articles/:slug'
					element={
						<Suspense fallback={<Loader width='50' height='50' />}>
							<ArticleDetail />
						</Suspense>
					}
				/>
				<Route
					path='create-article'
					element={
						<Suspense fallback={<Loader width='50' height='50' />}>
							<CreateArticle />
						</Suspense>
					}
				/>
				<Route
					path='edit-article/:slug'
					element={
						<Suspense fallback={<Loader width='50' height='50' />}>
							<EditArticle />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	)
}

export default App
