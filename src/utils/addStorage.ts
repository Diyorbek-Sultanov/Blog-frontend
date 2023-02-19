export const addLocalStorage = (key: string, data: string) => {
	try {
		localStorage.setItem(key, data)
	} catch (error) {
		console.log(error)
	}
}
