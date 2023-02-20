export const getItem = (key: string) => {
	try {
		return localStorage.getItem(key)
	} catch (error) {
		console.log(error)
	}
}
