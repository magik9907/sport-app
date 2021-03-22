import Favorite, { FavoriteElemType } from '../components/Favorite'
import './home.scss'
type favoriteTypes = {
  teams: { [key: string]: FavoriteElemType } | string
  leagues: { [key: string]: FavoriteElemType } | string
}

function Home() {
  const favorite: favoriteTypes = {
    teams: JSON.parse(localStorage.getItem('favoriteTeams') || '{}'),
    leagues: JSON.parse(localStorage.getItem('favoriteLeagues') || '{}'),
  }

  return (
    <div className="container">
      <div className="row favorite-container">
        {Object.entries(favorite).map(([key, value]) => (
          <Favorite key={key} list={value} name={key} />
        ))}
      </div>
    </div>
  )
}

export default Home
