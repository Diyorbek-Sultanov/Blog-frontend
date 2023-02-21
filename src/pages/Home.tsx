import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useAppSelector } from '../app/hooks/useAppSelector'
import CardItem from '../components/CardItem'
import Loader from '../components/Loader'

const Home: React.FC = () => {
	const { articles, status } = useAppSelector(state => state.Article)

	return (
		<Box component={'main'}>
			{status === 'loading' ? (
				<Loader width='50' height='50' />
			) : (
				<Container sx={{ mt: 8 }} maxWidth='lg'>
					<Grid container spacing={4}>
						{articles.map(item => (
							<CardItem key={item.id} {...item} />
						))}
					</Grid>
				</Container>
			)}
		</Box>
	)
}

export default Home
