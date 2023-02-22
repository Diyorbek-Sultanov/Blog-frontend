import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Textarea from '@mui/joy/Textarea'

type FormT = {
	title: string
	descr: string
	body: string
	setTitle: Dispatch<SetStateAction<string>>
	setDescr: Dispatch<SetStateAction<string>>
	setBody: Dispatch<SetStateAction<string>>
}

const Form: React.FC<FormT> = ({
	body,
	descr,
	title,
	setTitle,
	setBody,
	setDescr,
}) => {
	return (
		<Box component='form'>
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
				value={descr}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setDescr(e.target.value)
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
			<Button variant='contained' color='secondary'>
				Create
			</Button>
		</Box>
	)
}

export default Form
