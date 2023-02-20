export const removeItem = (key: string) => {
	try {
		localStorage.removeItem(key)
	} catch (error) {
		console.log(error)
	}
}
