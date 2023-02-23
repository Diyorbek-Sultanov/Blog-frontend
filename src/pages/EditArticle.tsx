import React, { FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { fetchArticleDetail } from '../store/slices/article'
import Form from '../ui/Form'
import toast from 'react-hot-toast'
import { useAppSelector } from '../app/hooks/useAppSelector'

const EditArticle: React.FC = () => {
	const { slug } = useParams()
	const { article } = useAppSelector(state => state.Article)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [title, setTitle] = React.useState<string>('')
	const [description, setDescription] = React.useState<string>('')
	const [body, setBody] = React.useState<string>('')

	React.useEffect(() => {
		dispatch(fetchArticleDetail(slug))

		setTitle(article.title)
		setDescription(article.description)
		setBody(article.body)
	}, [slug])

	const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		toast.success('Article update qilindi')
		navigate('/')
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
				<Form
					title={title}
					setTitle={setTitle}
					description={description}
					setDescription={setDescription}
					body={body}
					setBody={setBody}
					handlerSubmit={(e: FormEvent<HTMLFormElement>) => handlerSubmit(e)}
					edit={'Edit'}
					create={'Create'}
				/>
			</Container>
		</Box>
	)
}

export default EditArticle
