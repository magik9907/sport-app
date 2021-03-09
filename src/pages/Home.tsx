import Favorite from '../components/Favorite'

/*
	favorite team, league 
	short cut to sports list, leagues, countries,
*/

type favoriteTypes = {
  teams: Array<number> | string
  leagues: Array<number> | string
}

function Home() {
  const favorite: favoriteTypes = {
    teams: localStorage.getItem('favoriteTeams') || [],
    leagues: localStorage.getItem('favoriteLeagues') || [],
  }

  return (
    <div>
      {Object.entries(favorite).map(([key, value]) => (
        <Favorite key={key} list={value} name={key} />
      ))}
    </div>
  )
}

export default Home
