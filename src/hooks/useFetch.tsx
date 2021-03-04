import { useEffect, useState } from 'react'
import { Fetch } from '../api/Fetch'

function useFetch(url: string) {
	const [ jsonData, setJsonData ] = useState({})

	useEffect(() => {
		Fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php').then((data: any) => setJsonData(data))
	})

	return [ jsonData, setJsonData ]
}
export { useFetch }
