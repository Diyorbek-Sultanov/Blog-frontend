import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useAppSelector } from '../app/hooks/useAppSelector'
import CardItem from '../components/Card'

const Home: React.FC = () => {
	const { articles } = useAppSelector(state => state.Article)

	return (
		<Box component={'main'}>
			<Container sx={{ mt: 8 }} maxWidth='lg'>
				<Grid container spacing={4}>
					{articles.map(item => (
						<CardItem key={item.id} {...item} />
					))}
				</Grid>
			</Container>
		</Box>
	)
}

export default Home
