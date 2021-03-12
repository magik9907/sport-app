import { ReactElement } from 'react'
import { Merge } from '../MergeSort'

interface ILeagueTable {
  GenerateTable(): ReactElement
  GenerateTableHead(): ReactElement
  GenerateTableBody(): ReactElement
}

abstract class ALeagueTable<T> implements ILeagueTable {
  abstract columnName: { [key: string]: string }
  bodyContent: T[] = []
  constructor(json: T[]) {
    this.bodyContent = json
  }

  GenerateTable() {
    return (
      <table>
        {this.GenerateTableHead()}
        {this.GenerateTableBody()}
      </table>
    )
  }

  GenerateTableHead() {
    return (
      <thead>
        <tr>
          {Object.entries(this.columnName).map(([key,value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      </thead>
    )
  }

  GenerateTableBody() {
    const keysList: string[] = Object.keys(this.columnName)
    let content = this.bodyContent.map((elem: any, i: number) => {
      let cols = keysList.map((key, y) => {
        return <td key={`${i}-${key}${y}`}>{elem[key]}</td>
      })
      return <tr key={i}>{cols}</tr>
    })
    return <tbody>{content}</tbody>
  }
}

type SoccerType = {
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

function Comparer(A: SoccerType = {}, B: SoccerType = {}): boolean {
  if (!A.intRank) return false
  if (!B.intRank) return true
  let rankA: number, rankB: number
  rankA = parseInt(A['intRank'] || '0')
  rankB = parseInt(B['intRank'] || '0')
  return rankA <= rankB
}

class SoccerTable extends ALeagueTable<SoccerType> {
  columnName: { [key: string]: string } = {
    intRank: 'Position',
    strTeam: 'Team',
    intPoints: 'Points',
    intPlayed: 'Matches',
    intWin: 'Wins',
    intLoss: 'Losers',
    intDraw: 'Draw',
    intGoalsFor: 'Goal for',
    intGoalsAgainst: 'Goal against',
    intGoalDifference: 'Diffrence goal',
  }

  constructor(json: SoccerType[]) {
    super(Merge<SoccerType>(json, Comparer))
  }
}

export type { SoccerType, ILeagueTable }
export { SoccerTable }
