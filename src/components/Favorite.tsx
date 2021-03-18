import {Link} from 'react-router-dom'

type FavoriteElemType = {
  id: string
  badge: string
  name: string
}

function Favorite({
  list,
  name,
}: {
  list: { [key: string]: FavoriteElemType } | string
  name: string
}) {
  const url =
    name === 'teams'
      ? 'team/'
      : 'league/'
  if (Object.keys(list).length === 0)
    return (
      <div>
        <p>Favorite {name}</p>
        <p>You don't have favorite {name}</p>
      </div>
    )
  return (
    <div>
      <p>Favorite {name}</p>
      {Object.entries(list).map(([key, value]: [string, FavoriteElemType]) => {
        return (
          <Link key={key} to={url + value.id}>
            <img src={value.badge} alt={value.name} />
            {value.name}
          </Link>
        )
      })}
    </div>
  )
}

export type { FavoriteElemType }
export default Favorite
