import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea'
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

	return (
		<Box
			component='form'
			onSubmit={(e: FormEvent<HTMLFormElement>) => handlerSubmit(e)}
		>
			<TextField
				name='text'
				label='Title'
				placeholder='Enter title'
				type='text'
				required
				fullWidth
				sx={{ mb: 3 }}
				value={title}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTitle(e.target.value)
				}
			/>
			<Textarea
				name='descr'
				color='primary'
				placeholder='Enter description'
				minRows={5}
				size='lg'
				variant='plain'
				value={description}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setDescription(e.target.value)
				}
				sx={{ mb: 3, border: '1px solid #054da7' }}
			/>
			<Textarea
				name='body'
				color='primary'
				placeholder='Enter body'
				minRows={5}
				size='lg'
				variant='plain'
				value={body}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setBody(e.target.value)
				}
				sx={{ mb: 3, border: '1px solid #054da7' }}
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
				disabled={status === 'loading'}
			>
				{status === 'loading' ? <Loader width='20' height='20' /> : 'Create'}
			</Button>
		</Box>
	)
}

export default Form
