import { Merge } from '../MergeSort'
import { ALeagueTable } from './ALeagueTable'
import { DeleteDuplicat } from './LeagueTable'

type DartsType = {
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

function Comparer(A: DartsType = {}, B: DartsType = {}): boolean {
  if (!A.intRank) return false
  if (!B.intRank) return true
  let rankA: number, rankB: number
  rankA = parseInt(A['intRank'] || '0')
  rankB = parseInt(B['intRank'] || '0')
  return rankA <= rankB
}
class DartsTable extends ALeagueTable<DartsType> {
  columnName: { [key: string]: string } = {
    intRank: 'Position',
    strTeam: 'Team',
    intPoints: 'Points',
    strDescription: 'additional',
  }

  constructor(json: DartsType[]) {
    super(Merge<DartsType>(DeleteDuplicat(json), Comparer))
  }
}

export type { DartsType }
export { DartsTable }
