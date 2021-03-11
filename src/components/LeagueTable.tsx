import { useEffect, useState } from 'react'
import { Merge } from './MergeSort'
import { Link } from 'react-router-dom'
type jsonType = {
  idStanding?: string
  intRank?: string
  idTeam?: string
  strTeam?: string
  strTeamBadge?: string
  idLeague?: string
  strLeague?: string
  strSeason?: string
  strForm?: string
  strDescription?: string
  intPlayed?: string
  intWin?: string
  intLoss?: string
  intDraw?: string
  intGoalsFor?: string
  intGoalsAgainst?: string
  intGoalDifference?: string
  intPoints?: string
  dateUpdated?: string
}

function Comparer(A: jsonType = {}, B: jsonType = {}): boolean {
  if (!A.intRank) return false
  if (!B.intRank) return true
  let rankA: number, rankB: number
  rankA = parseInt(A['intRank'] || '0')
  rankB = parseInt(B['intRank'] || '0')
  return rankA <= rankB
}

function TeamRank(props: jsonType) {
  return (
    <tr>
      <td>{props.intRank}</td>
      <td>
        <Link to={'/team/' + props.idTeam}>
          <img src={props.strTeamBadge} title={props.strTeam} alt="" />
          {props.strTeam}
        </Link>
      </td>
      <td>{props.intPoints}</td>
      <td>{props.intWin}</td>
      <td>{props.intDraw}</td>
      <td>{props.intLoss}</td>
      <td>{props.intGoalsFor}</td>
      <td>{props.intGoalsAgainst}</td>
      <td>{props.intGoalDifference}</td>
    </tr>
  )
}

const LeagueTable = (props: { leagueId: string }) => {
  const [seasonJSON, setSeasonJSON] = useState<jsonType[]>([])
  const [season, setSeason] = useState<string>('2020-2021')
  useEffect(() => {
    let url = `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${props.leagueId}&s=${season}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(Merge<jsonType>(data.table, Comparer))
        setSeasonJSON(Merge<jsonType>(data.table, Comparer))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [season])

  return (
    <div>
      {seasonJSON.length === 0 ? (
        <p>fetchning...</p>
      ) : (
        <>
          <p>{season}</p>
          <table>
            <thead>
              <tr>
                <td>position</td>
                <td>team</td>
                <td>points</td>
                <td>win</td>
                <td>draw</td>
                <td>looses</td>
                <td>goal for</td>
                <td>goal against</td>
                <td>goal difference</td>
              </tr>
            </thead>
            <tbody>
              {seasonJSON.map((rankPost) => (
                <TeamRank key={rankPost.intRank} {...rankPost} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default LeagueTable
