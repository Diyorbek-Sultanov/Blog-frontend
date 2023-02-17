import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

const authService = {
	async userRegister() {
		await axios.post('/users')
	},
}

export default authService
