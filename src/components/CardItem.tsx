import React from 'react'
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Article } from '../service/articles'

const CardItem: React.FC<Article> = ({ title, slug, author, description }) => {
	const navigate = useNavigate()

	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
				<CardMedia
					sx={{
						maxHeight: '250px',
					}}
					image='https://via.placeholder.com/300/0A2647/fff.png'
					component={'img'}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography
						fontSize={18}
						fontWeight={700}
						variant='h5'
						component={'h2'}
						mb={2}
					>
						{title}
					</Typography>
					<Typography paragraph>{description}</Typography>
				</CardContent>
				<CardActions
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Stack direction={'row'} spacing={1}>
						<Button
							onClick={() => navigate(`/articles/${slug}`)}
							size='small'
							variant='contained'
						>
							View
						</Button>
						<Button size='small' variant='contained' color='info'>
							Edit
						</Button>
						<Button size='small' variant='contained' color='error'>
							Delete
						</Button>
					</Stack>
					<Typography
						sx={{ textTransform: 'capitalize' }}
						variant='h6'
						component={'h2'}
					>
						{author.username}
					</Typography>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default CardItem
