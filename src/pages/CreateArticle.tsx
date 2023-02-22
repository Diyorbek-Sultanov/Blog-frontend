import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import Form from '../ui/Form'

const CreateArticle: React.FC = () => {
	const [title, setTitle] = React.useState<string>('')
	const [descr, setDescr] = React.useState<string>('')
	const [body, setBody] = React.useState<string>('')

	return (
		<Box component={'section'} mt={7}>
			<Container maxWidth={'md'}>
				<Typography variant='h4' textAlign={'center'} mb={4}>
					Create Article
				</Typography>
				<Form
					title={title}
					setTitle={setTitle}
					descr={descr}
					setDescr={setDescr}
					body={body}
					setBody={setBody}
				/>
			</Container>
		</Box>
	)
}

export default CreateArticle
