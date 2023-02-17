import React from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const MainLayout: React.FC = () => {
	return (
		<Container maxWidth='lg'>
			<Navbar />
			<Outlet />
		</Container>
	)
}

export default MainLayout
