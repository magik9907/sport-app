import { Merge } from '../MergeSort'
import { ALeagueTable } from './ALeagueTable'
import { DeleteDuplicat } from './LeagueTable'

type NetballType = {
  idStanding?: string
  intRank?: string
  idTeam?: string
  strTeam?: string
  strTeamBadge?: string
  idLeague?: string
  strLeague?: string
  strSeason?: string
  strDescription?: string
  intPoints?: string
  dateUpdated?: string
}

function Comparer(A: NetballType = {}, B: NetballType = {}): boolean {
  if (!A.intRank) return false
  if (!B.intRank) return true
  let rankA: number, rankB: number
  rankA = parseInt(A['intRank'] || '0')
  rankB = parseInt(B['intRank'] || '0')
  return rankA <= rankB
}
class NetballTable extends ALeagueTable<NetballType> {
  columnName: { [key: string]: string } = {
    intRank: 'Position',
    strTeam: 'Team',
    intPoints: 'Points',
    strDescription: 'additional',
  }

  constructor(json: NetballType[]) {
    super(Merge<NetballType>(DeleteDuplicat(json), Comparer))
  }
}

export type { NetballType }
export { NetballTable }
