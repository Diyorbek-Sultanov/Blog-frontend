import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea'
import { TextareaAutosize } from '@mui/base'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks/useAppSelector'
import { Loader } from '../components'

type FormT = {
	title: string
	description: string
	body: string
	setTitle: Dispatch<SetStateAction<string>>
	setDescription: Dispatch<SetStateAction<string>>
	setBody: Dispatch<SetStateAction<string>>
	handlerSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormT> = ({
	body,
	description,
	title,
	setTitle,
	setBody,
	setDescription,
	handlerSubmit,
}) => {
	const { status } = useAppSelector(state => state.Article)
	const location = useLocation()

	return (
		<Box
			component='form'
			onSubmit={(e: FormEvent<HTMLFormElement>) => handlerSubmit(e)}
			display='flex'
			flexDirection='column'
			rowGap={2.5}
		>
			<TextField
				name='text'
				label='Title'
				placeholder='Enter title'
				type='text'
				required
				fullWidth
				value={title || ''}
				onChange={e => setTitle(e.target.value)}
			/>
			<TextareaAutosize
				minRows={5}
				maxRows={10}
				name='descr'
				placeholder='Enter description'
				value={description || ''}
				onChange={e => setDescription(e.target.value)}
				className='text-area'
				style={{ height: '150px' }}
			/>

			<TextareaAutosize
				minRows={5}
				maxRows={10}
				name='body'
				placeholder='Enter body'
				value={body || ''}
				onChange={e => setBody(e.target.value)}
				className='text-area'
				style={{ height: '150px' }}
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				disabled={status === 'loading'}
				sx={{ width: '100px' }}
			>
				{status === 'loading' ? (
					<Loader width='20' height='20' />
				) : location.pathname === '/create-article' ? (
					'Create'
				) : (
					'Edit'
				)}
			</Button>
		</Box>
	)
}

export default Form
