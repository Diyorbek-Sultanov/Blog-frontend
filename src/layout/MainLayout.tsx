import React from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Navbar } from '../components'

const MainLayout: React.FC = () => {
	return (
		<Container maxWidth='lg' sx={{ minHeight: '100vh', overflow: 'hidden' }}>
			<Navbar />
			<Outlet />
		</Container>
	)
}

export default MainLayout
