import { useEffect, useState } from 'react'
import { SoccerTable, ILeagueTable } from './SportTable'
type LeagueType = {
  json: any
  sport: string
}

function LeagueTable(props: LeagueType) {
  const [state, setState] = useState(new SoccerTable(props.json))

  return <>{state ? <>{state.GenerateTable()}</> : <p>problem</p>}</>
}

export default LeagueTable
