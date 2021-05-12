import { Link } from 'react-router-dom'

type LeagueType = {
  idLeague: string
  strLeague: string
  strSport: string
  strLeagueAlternate: string
}

interface ILeague {
  idLeague: string
  strLeague: string
  strLeagueAlternate: string
  ToJSX: () => any
}

class League implements ILeague {
  idLeague: string
  strLeague: string
  strLeagueAlternate: string

  constructor({ idLeague, strLeague, strLeagueAlternate }: LeagueType) {
    this.idLeague = idLeague
    this.strLeague = strLeague
    this.strLeagueAlternate = strLeagueAlternate
  }

  public ToJSX() {
    return (
      <li key={this.idLeague} className="bg-dark list-group-item">
        <Link to={'/league/' + this.idLeague} className="text-light">{this.strLeague}</Link>
      </li>
    )
  }
}

type LeagueListType = {
  leaguesList: Array<ILeague>
  sport: string
}

interface ILeagueList {
  leaguesList: Array<ILeague>
  sport: string
  Add: (league: LeagueType) => void
  ToJSX: () => any
}

class LeaguesList implements ILeagueList {
  leaguesList: Array<ILeague>
  sport: string
  constructor(sport: string) {
    this.sport = sport
    this.leaguesList = []
  }
  public Add(league: LeagueType) {
    this.leaguesList.push(new League(league))
  }
  public ToJSX(name: string = '') {
    const filteredList =
      name !== ''
        ? this.leaguesList.filter((elem) =>
            elem.strLeague.toUpperCase().includes(name.toUpperCase())
          )
        : this.leaguesList
    let leagueElements = filteredList.map((element) => {
      return element.ToJSX()
    })

    return (
      <>
        <p className="display-4 text-break">{this.sport}</p>
        <ul className="  list-group width-100 flex-row flex-wrap">{leagueElements}</ul>
      </>
    )
  }
}

export { LeaguesList, League }

export type { ILeague, ILeagueList, LeagueListType, LeagueType }
