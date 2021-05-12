import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type propsType = {
  name: string
}
const Search = ({ name }: propsType) => {
  const [json, setJson] = useState<Array<{ [key: string]: string }> | null>(
    null
  )
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setJson(data.teams)
      })
      .catch((resolve) => {
        console.error(resolve)
      })
  }, [name])
  return (
    <>
      {json !== null && json.length > 0 ? (
        <ul className="list-group width-100 flex-row flex-wrap">
          {json.map((elem: { [key: string]: string }) => {
            return (
              <li className="bg-dark list-group-item">
                <Link key={elem.idTeam} to={`/team/${elem.idTeam}`} className="text-light">
                  {elem.strTeam}
                </Link>
                <br />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </>
  )
}

export default Search
