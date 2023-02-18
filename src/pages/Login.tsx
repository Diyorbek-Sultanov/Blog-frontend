import React from 'react'
import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from '@mui/material'

import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { useAppSelector } from '../app/hooks/useAppSelector'
import Loader from '../components/Loader'
import { fetchUserLogin } from '../store/slices/auth'
import { UserT } from './Register'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()
	const { status } = useAppSelector(state => state.Auth)

	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const user: UserT = { email, password }

		dispatch(fetchUserLogin(user))
	}

	return (
		<Container component={'main'} maxWidth={'xs'}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component='h1' variant='h5'>
					Sign In
				</Typography>
				<Box
					component='form'
					onSubmit={handlerSubmit}
					sx={{ mt: 3, width: '100%' }}
				>
					<TextField
						name='email'
						label='Email'
						placeholder='Enter email'
						type='email'
						required
						fullWidth
						sx={{ mb: 3 }}
						value={email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
					/>
					<TextField
						name='password'
						label='Password'
						placeholder='Enter password'
						type='password'
						required
						fullWidth
						sx={{ mb: 3 }}
						value={password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<Button
						variant='contained'
						disabled={status === 'loading'}
						type='submit'
						fullWidth
					>
						{status === 'loading' ? <Loader /> : 'Sign In'}
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default Login
