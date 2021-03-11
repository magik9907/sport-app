import { useEffect, useState } from 'react'
import { Merge } from './MergeSort'

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

function Comparer(A: jsonType ={}, B: jsonType ={}): boolean {
  if(!A.intRank)return false;
  if(!B.intRank)return true;
  let rankA: number, rankB: number
  rankA = parseInt(A["intRank"] || '0')
  rankB = parseInt(B["intRank"] || '0')
  return rankA <= rankB
}

const LeagueTable = (props: { leagueId: string }) => {
  const [seasonJSON, setSeasonJSON] = useState<jsonType[]>([])
  const [season, setSeason] = useState<string>('2020-2021')
  useEffect(() => {
    let url = `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${props.leagueId}&s=${season}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(Merge<jsonType>( data.table, Comparer))
        setSeasonJSON(
          Merge<jsonType>( data.table, Comparer)
        )
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
          <table></table>
        </>
      )}
    </div>
  )
}

export default LeagueTable
