const Fetch: (url: string) => any = (url) => {
	return fetch(url)
		.then((response) => {
			return response.json()
		})
		.then((data) => data)
		.catch((error: ErrorEvent) => {
			console.error(error.message)
			return null
		})
}

export { Fetch }
