import React from 'react'
import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from '@mui/material'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../app/hooks/useAppDispatch'
import { useAppSelector } from '../app/hooks/useAppSelector'
import { fetchUser } from '../store/slices/auth'
import { Loader } from '../components'

export type UserT = {
	username?: string
	email: string
	password: string
}

const Register: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { status, loggedIn } = useAppSelector(state => state.Auth)

	const [name, setName] = React.useState<string>('')
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const user: UserT = { username: name, email, password }

		dispatch(fetchUser(user))
		toast.success('Registratsiya muvaffaqiyatli boldi')
		navigate('/')
	}

	React.useEffect(() => {
		if (loggedIn) {
			navigate('/')
		}
	}, [loggedIn])

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
					Sign Up
				</Typography>
				<Box
					component='form'
					onSubmit={handlerSubmit}
					sx={{ mt: 3, width: '100%' }}
				>
					<TextField
						name='name'
						label='Name'
						placeholder='Enter name'
						type='text'
						required
						fullWidth
						sx={{ mb: 3 }}
						value={name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
					/>
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
						type='submit'
						disabled={status === 'loading'}
						fullWidth
					>
						{status === 'loading' ? (
							<Loader width='20' height='20' />
						) : (
							'Sign Up'
						)}
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default Register
