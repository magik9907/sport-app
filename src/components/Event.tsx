import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Event() {
  const [json, setJson] = useState<{ [key: string]: string } | null>(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Event', data)
        setJson(data.events[0])
      })
  }, [])
  if (json === null) return <p>No data</p>
  return (
    <div>
      <div>
        <h1>{json.strEvent}</h1>
        <p>{json.dateEvent}: {json.strTime}</p>
        <p>
          {' '}
          {json.intHomeScore}-{json.intAwayScore}
        </p>
        <p>
          {json.strLeague} {json.strSeason} Round: {json.intRound}
        </p>
        <div>
          <div>
            <p>{json.strHomeTeam}</p>
            <p>{json.strHomeFormation}</p>
            <div>
              <div>{json.strHomeLineupForward}</div>
              <div>{json.strHomeLineupMidField}</div>
              <div>{json.strHomeLineupDefense}</div>
              <div>{json.strHomeLineupGoalkeeper}</div>
            </div>
          </div>
          <div>
            <p>{json.strAwayTeam}</p>
            <p>{json.strAwayFormation}</p>
            <div>
              <div>{json.strAwayLineupForward}</div>
              <div>{json.strAwayLineupMidField}</div>
              <div>{json.strAwayLineupDefense}</div>
              <div>{json.strAwayLineupGoalkeeper}</div>
            </div>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr><td>{json.intHomeScore}</td><td>-</td><td>{json.intAwayScore}</td></tr>
              <tr><td>{json.strHomeGoalDetails}</td><td>-</td><td>{json.strAwayGoalDetails}</td></tr>
              <tr><td>{json.intHomeShots}</td><td>-</td><td>{json.intAwayShots}</td></tr>
              <tr><td>{json.strGomeYellowCards}</td><td>-</td><td>{json.StrAwayYellowCards}</td></tr>
              <tr><td>{json.strHomeRedCards}</td><td>-</td><td>{json.strAwayRedCards}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
