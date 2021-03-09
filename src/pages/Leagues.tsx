import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { LeaguesList, LeagueType } from '../components/LeaguesList'

type LeaguesProps = {}

type GenerateLeagueListType = {
  data: { [key: string]: LeaguesList }
  sport: string
  leagueName: string
}

const GenerateLeagueList = (props: GenerateLeagueListType) => {
  try {
    const leagueName: string = props.leagueName
    const sport: string = props.sport

    let leagues: { [key: string]: LeaguesList } | LeaguesList = {}
    if (sport !== '') leagues[sport] = props.data[sport]
    else leagues = props.data
    return (
      <div>
        {Object.entries(leagues).map(([key, value]) => {
          return <div key={key}>{value.ToJSX(leagueName)}</div>
        })}
      </div>
    )
  } catch (e) {
    console.log(e)
    return <p key={'pr'}>Problem</p>
  }
}

const Leagues: FunctionComponent<LeaguesProps> = () => {
  const sportInput = useRef<HTMLSelectElement>(null)
  const leagueInput = useRef<HTMLInputElement>(null)
  const [jsonData, setJsonData] = useState({})
  const [sportSelected, setSportSelected] = useState('')
  const [leagueSelected, setLeagueSelected] = useState('')
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then((response) => response.json())
      .then((data) => {
        let groupingList: { [key: string]: LeaguesList } = {}
        data.leagues.forEach((elem: LeagueType) => {
          if (!groupingList[elem.strSport])
            groupingList[elem.strSport] = new LeaguesList(elem.strSport)
          groupingList[elem.strSport].Add(elem)
        })
        setJsonData(groupingList)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Leagues</h1>
      <form action="#">
        <div>
          <label htmlFor="dyscypline">Dyscypline</label>
          <select
            name="dyscypline"
            id="dyscypline"
            ref={sportInput}
            onChange={() =>
              setSportSelected(
                null !== sportInput.current ? sportInput.current.value : ''
              )
            }
          >
            <option value="">Select</option>
            {Object.keys(jsonData).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}{' '}
          </select>
        </div>
        <div>
          <label htmlFor="name">League name</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={leagueInput}
            onChange={() =>
              setLeagueSelected(
                null !== leagueInput.current ? leagueInput.current.value : ''
              )
            }
          />
        </div>
      </form>
      {Object.keys(jsonData).length > 0 ? (
        <GenerateLeagueList
          data={jsonData}
          sport={sportSelected}
          leagueName={leagueSelected}
        />
      ) : (
        <p>fetching...</p>
      )}
    </div>
  )
}

export default Leagues
