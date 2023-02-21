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
import React from 'react'
import { Article } from '../service/articles'

const CardItem: React.FC<Article> = ({ title, author, description }) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card sx={{ height: '100%' }}>
				<CardMedia
					component={'img'}
					image={'https://source.unsplash.com/random'}
					alt='image'
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
				<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Stack direction={'row'} spacing={1}>
						<Button size='small' variant='contained'>
							View
						</Button>
						<Button size='small' variant='contained' color='error'>
							Edit
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
