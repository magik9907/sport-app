import { Merge } from '../MergeSort'
import { ALeagueTable } from './ALeagueTable'
import { DeleteDuplicat } from './LeagueTable'

type IceHockeyType = {
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

function Comparer(A: IceHockeyType = {}, B: IceHockeyType = {}): boolean {
  if (!A.intRank) return false
  if (!B.intRank) return true
  let rankA: number, rankB: number
  rankA = parseInt(A['intRank'] || '0')
  rankB = parseInt(B['intRank'] || '0')
  return rankA <= rankB
}
class IceHockeyTable extends ALeagueTable<IceHockeyType> {
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
    strDescription: 'additional',
  }

  constructor(json: IceHockeyType[]) {
    super(Merge<IceHockeyType>(DeleteDuplicat(json), Comparer))
  }
}

export type { IceHockeyType }
export { IceHockeyTable }
