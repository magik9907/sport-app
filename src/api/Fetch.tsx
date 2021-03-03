import { JsonObjectExpressionStatement } from 'typescript'

const Fetch: (url: string) => Promise<JsonObjectExpressionStatement> = (url) => {
	return fetch(url)
		.then((response) => {
			return response.json()
		})
		.catch((error:ErrorEvent) => {
      console.error(error.message)
      return null;
		})
}

export { Fetch }
