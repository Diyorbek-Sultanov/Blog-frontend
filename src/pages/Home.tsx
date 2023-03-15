import React from 'react'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

import { useAppSelector } from '../app/hooks/useAppSelector'
import { Loader, MCardItem } from '../components'

import { fetchArticles } from '../store/slices/article'
import { useAppDispatch } from '../app/hooks/useAppDispatch'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { articles, status } = useAppSelector(state => state.Article)

	React.useEffect(() => {
		dispatch(fetchArticles())
	}, [])

	const ArticleAnimation = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visibble: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<Box component={motion.main} mb={8} initial='hidden' whileInView='visibble'>
			<Helmet>
				<title>Home</title>
				<meta name='description' content='the home page' />
			</Helmet>
			{status === 'loading' ? (
				<Loader width='50' height='50' />
			) : (
				<Container sx={{ mt: 8 }} maxWidth='lg'>
					<Grid container spacing={4}>
						{articles?.map((item, i) => (
							<MCardItem
								variants={ArticleAnimation}
								custom={i + 1}
								key={item.id}
								{...item}
							/>
						))}
					</Grid>
				</Container>
			)}
		</Box>
	)
}

export default Home
