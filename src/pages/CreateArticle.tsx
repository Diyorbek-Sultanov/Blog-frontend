import React, { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import toast from 'react-hot-toast'

import Form from '../ui/Form'
import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { fetchArticleCreate } from '../store/slices/article'

export type ArticlesT = {
	title: string | undefined
	description: string | undefined
	body: string | undefined
}

const CreateArticle: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')
	const [body, setBody] = React.useState<string>('')

	const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const article: ArticlesT = { title, description, body }

		dispatch(fetchArticleCreate(article))
		toast.success('Article yaratildi')
		navigate('/')
	}

	const formProps = {
		title,
		description,
		body,
		setTitle,
		setDescription,
		setBody,
		handlerSubmit,
	}

	return (
		<Box component={'section'} mt={7}>
			<Container maxWidth={'md'}>
				<Link className='none' to={'/'}>
					<Button variant='outlined' sx={{ marginBottom: '25px' }}>
						<ArrowBackIosNewIcon
							fontSize='inherit'
							sx={{ marginRight: '5px' }}
						/>
						Back
					</Button>
				</Link>
				<Typography variant='h4' textAlign={'center'} mb={4}>
					Create Article
				</Typography>
				<Form {...formProps} />
			</Container>
		</Box>
	)
}

export default CreateArticle
