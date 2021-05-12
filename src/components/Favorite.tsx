import { Link } from 'react-router-dom'

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
  const url = name === 'teams' ? 'team/' : 'league/'
  if (Object.keys(list).length === 0)
    return (
      <div className="">
        <p className="display-4 text-uppercase font-weight-bold">Favorite {name}</p>
        <p>You don't have favorite {name}</p>
      </div>
    )
  return (
    <div className="col">
      <p className="display-4 text-uppercase font-weight-bold">
        Favorite {name}
      </p>
      <div className="d-flex flex-wrap">
        {Object.entries(list).map(
          ([key, value]: [string, FavoriteElemType]) => {
            return (
              <Link
                key={key}
                to={url + value.id}
                className="m-2 bg-dark p-3 text-primary d-flex align-items-center flex-column "
              >
                <img src={value.badge} alt={value.name} />
                <span className="">{value.name}</span>
              </Link>
            )
          }
        )}
      </div>
    </div>
  )
}

export type { FavoriteElemType }
export default Favorite
