import { useEffect, useState } from 'react'
import { AmericanFootballTable } from './AmericanFootballTable'
import { AustralianFootballTable } from './AustralianFootballTable'
import { BaseballTable } from './BaseballTable'
import { BasketballTable } from './BasketballTable'
import { CricketTable } from './CricketTable'
import { CyclingTable } from './CyclingTable'
import { DartsTable } from './DartsTable'
import { EsportTable } from './EsportTable'
import { FieldHockeyTable } from './FieldHockeyTable'
import { FightingTable } from './FightingTable'
import { GolfTable } from './GolfTable'
import { HandballTable } from './HandballTable'
import { IceHockeyTable } from './IceHockeyTable'
import { MotorsportTable } from './MotorsportTable'
import { NetballTable } from './NetballTable'
import { RugbyTable } from './RugbyTable'
import { SnookerTable } from './SnookerTable'
import { SoccerTable } from './SoccerTable'
import { VolleyballTable } from './VolleyballTable'
import Events from '../Events'
type LeagueType = {
  json: any
  sport: string
}

function DeleteDuplicat(array: { [key: string]: string }[]) {
  const objectNoDuplicate: { [key: string]: boolean } = {}

  return array.filter((elem: { [key: string]: string }) => {
    let teamName: string = elem.strTeam
    if (objectNoDuplicate[teamName || '']) return false
    else {
      objectNoDuplicate[teamName || ''] = true
      return true
    }
  })
}

function LeagueTable(props: LeagueType) {
  const [state, setState] = useState<SoccerTable | null>(null)

  useEffect(() => {
    let objLeague = null
    switch (props.sport) {
      case 'Soccer':
        objLeague = new SoccerTable(props.json)
        break
      case 'Ice Hockey':
        objLeague = new IceHockeyTable(props.json)
        break
      case 'Motorsport':
        objLeague = new MotorsportTable(props.json)
        break
      case 'Basketball':
        objLeague = new BasketballTable(props.json)
        break
      case 'American Football':
        objLeague = new AmericanFootballTable(props.json)
        break
      case 'Rugby':
        objLeague = new RugbyTable(props.json)
        break
      case 'Baseball':
        objLeague = new BaseballTable(props.json)
        break
      case 'Golf':
        objLeague = new GolfTable(props.json)
        break
      case 'Fighting':
        objLeague = new FightingTable(props.json)
        break
      case 'Australian Football':
        objLeague = new AustralianFootballTable(props.json)
        break
      case 'Cricket':
        objLeague = new CricketTable(props.json)
        break
      case 'Cycling':
        objLeague = new CyclingTable(props.json)
        break
      case 'Esport':
      case 'ESport':
        objLeague = new EsportTable(props.json)
        break
      case 'Handball':
        objLeague = new HandballTable(props.json)
        break
      case 'Netball':
        objLeague = new NetballTable(props.json)
        break
      case 'Volleyball':
        objLeague = new VolleyballTable(props.json)
        break
      case 'Darts':
        objLeague = new DartsTable(props.json)
        break
      case 'Snooker':
        objLeague = new SnookerTable(props.json)
        break
      case 'Field Hockey':
        objLeague = new FieldHockeyTable(props.json)
        break
    }

    setState(objLeague)
  }, [])

  return (
    <>
      {state ? (
        <>
          {state.GenerateTable()}
          <Events />
        </>
      ) : (
        <p>problem</p>
      )}
    </>
  )
}

export { DeleteDuplicat }
export default LeagueTable
