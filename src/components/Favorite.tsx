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
      ? 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='
      : 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id='
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
          <a key={key} href={url + value.id}>
            <img src={value.badge} alt={value.name} />
            {value.name}
          </a>
        )
      })}
    </div>
  )
}

export type { FavoriteElemType }
export default Favorite
