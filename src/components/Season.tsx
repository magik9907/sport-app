import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Season() {
  const [json, setJson] = useState<{ [key: string]: string }[] | null>(null)
  const { id, season } = useParams()
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=${id}&s=${season}`
    )
      .then((response) => response.json())
      .then((data) => {
        setJson(data.events)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  if (json === null) return <p>No data</p>
  return (
    <div>
      {json[0].strLeague}
      <table className="table">
        <tbody>
          {json.map((elem) => (
            <tr key={elem.idEvent}>
              <td>{elem.strHomeTeam}</td>
              <td>
                <Link to={`/event/${elem.idEvent}`}>
                  {elem.intHomeScore} - {elem.intAwayScore}
                </Link>
              </td>
              <td>{elem.strAwayTeam}</td>
              <td>{elem.dateEvent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
