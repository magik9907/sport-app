import {Link} from 'react-router-dom'

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
  ToJSX:()=>any
}

class League implements ILeague {
	idLeague: string
	strLeague: string
	strLeagueAlternate: string

	constructor(
    {idLeague,
    strLeague,
    strLeagueAlternate}
    :LeagueType) {
		this.idLeague = idLeague
		this.strLeague = strLeague
		this.strLeagueAlternate = strLeagueAlternate
	}

  public ToJSX(){
    return <p><Link to={`/league/${this.idLeague}`}>{this.strLeagueAlternate}</Link></p>
  }
}

type LeagueListType ={
  leaguesList:Array<ILeague>
  sport:string
}

interface ILeagueList {
  leaguesList:Array<ILeague>
  sport:string,
  Add:(league:LeagueType)=>void,
  ToJSX:()=>any
}

class LeaguesList implements ILeagueList {
  leaguesList :Array<ILeague>
  sport :string
  constructor(sport:string){
    this.sport = sport;
    this.leaguesList = [];
  }
  public Add(league:LeagueType){
    this.leaguesList.push(new League(league))
  }
  public ToJSX(){
    let leagueElements = this.leaguesList.map(element => {
      return element.ToJSX();
    });

    return <div><p>{this.sport}</p>{leagueElements}</div>
  }

}

export { LeaguesList, League}

export type { ILeague ,ILeagueList, LeagueListType,LeagueType}
