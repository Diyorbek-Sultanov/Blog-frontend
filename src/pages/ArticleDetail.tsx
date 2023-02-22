import React from 'react'
import {
	Box,
	Button,
	Container,
	CssBaseline,
	Paper,
	Stack,
	Typography,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'

import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { fetchArticleDetail } from '../store/slices/article'
import { useAppSelector } from '../app/hooks/useAppSelector'
import { Skeleton } from '../components'

const ArticleDetail: React.FC = () => {
	const { slug } = useParams()
	const dispatch = useAppDispatch()
	const { article, status } = useAppSelector(state => state.Article)

	React.useEffect(() => {
		dispatch(fetchArticleDetail(slug))
	}, [slug])

	if (!article) {
		return <>Not Found</>
	}

	return (
		<Box component={'section'} mt={8}>
			<CssBaseline />
			<Container maxWidth={'lg'}>
				{status === 'loading' ? (
					<Skeleton />
				) : (
					<Paper elevation={3} sx={{ padding: '15px' }}>
						<Link className='none' to={'/'}>
							<Button variant='outlined' sx={{ marginBottom: '25px' }}>
								<ArrowBackIosNewIcon
									fontSize='inherit'
									sx={{ marginRight: '5px' }}
								/>
								Back
							</Button>
						</Link>
						<Stack direction={'column'} rowGap={'15px'}>
							<Typography
								variant='h3'
								component={'h5'}
								sx={{
									textTransform: 'capitalize',
									fontSize: '25px',
									fontWeight: '700',
								}}
							>
								{article?.author?.username}
							</Typography>
							<Typography paragraph>{article?.author?.bio}</Typography>
							<Typography
								variant='h4'
								component={'h6'}
								fontSize={'20px'}
								fontWeight={'700'}
								sx={{ textTransform: 'capitalize' }}
							>
								{article?.slug}
							</Typography>
							<Typography variant={'h6'}>{article?.title}</Typography>
							<Typography paragraph>{article?.description}</Typography>
							<Typography paragraph>
								<span className='span'>Created at:</span>
								{moment(article?.createdAt).format('MMM Do YYYY')}
							</Typography>
						</Stack>
					</Paper>
				)}
			</Container>
		</Box>
	)
}

export default ArticleDetail
