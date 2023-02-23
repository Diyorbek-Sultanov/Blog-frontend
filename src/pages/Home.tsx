import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useAppSelector } from '../app/hooks/useAppSelector'
import { Loader, CardItem } from '../components'
import { fetchArticles } from '../store/slices/article'
import { useAppDispatch } from '../app/hooks/useAppDispatch'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { articles, status } = useAppSelector(state => state.Article)

	React.useEffect(() => {
		dispatch(fetchArticles())
	}, [])

	return (
		<Box component={'main'} mb={8}>
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
