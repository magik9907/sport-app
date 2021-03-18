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
        console.log(data)
        setJson(data.teams)
      })
      .catch((resolve) => {
        console.error(resolve)
      })
  }, [name])
  return (
    <>
      {json !== null && json.length > 0 ? (
        <div>
          {json.map((elem: { [key: string]: string }) => {
            return (
              <>
                <Link key={elem.idTeam} to={`/team/${elem.idTeam}`}>
                  {elem.strTeam}
                </Link>
                <br />
              </>
            )
          })}
        </div>
      ) : (
        <p>No data</p>
      )}
    </>
  )
}

export default Search
