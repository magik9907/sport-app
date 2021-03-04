import { FunctionComponent } from 'react'
import { LeaguesList, LeagueType } from '../components/LeaguesList'
import { useFetch } from '../hooks/useFetch'

type LeaguesProps = {}

type DataType = {
	leagues: Array<LeagueType>
}

const GenerateLeagueList = (props: { data: DataType }) => {
	try {
		const leagues: LeagueType[] = props.data.leagues
		let sportLeaugeGrouping: { [key: string]: LeaguesList } = {}
		leagues.forEach((elem: LeagueType) => {
			let sport = elem.strSport
			if (sportLeaugeGrouping[sport] !== undefined) sportLeaugeGrouping[sport].Add(elem)
			else {
				sportLeaugeGrouping[sport] = new LeaguesList(sport)
			}
		})

		return <div>{
			Object.entries(sportLeaugeGrouping).map(([key,value])=>{
				return <>
					{value.ToJSX()}
				</>
			})
			}</div>
	} catch (e) {
		console.log(e)
		return <p>Problem</p>
	}
}

const Leagues: FunctionComponent<LeaguesProps> = () => {
	const [ jsonData, setJsonData ]: any = useFetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
	return (
		<div>
			<h1>Leagues</h1>
			{jsonData.leagues !== undefined ? <GenerateLeagueList data={jsonData} /> : <p>fetching...</p>}
		</div>
	)
}

export default Leagues
