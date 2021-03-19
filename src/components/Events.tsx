import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Events() {
  const [json, setJson] = useState<{ [key: string]: string }[] | null>(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('events',data)
        setJson(data.events)
      })
  }, [])
  if (json === null) return <p>No data</p>
  return (
    <div>
      {json[0].strLeague}
      <table>
        <tbody>
          {json.map((elem) => (
            <tr key={elem.idEvent}>
              <td>{elem.strHomeTeam}</td>
              <td>
                <Link to={`/event/${elem.idEvent}`}>
                  {' '}
                  {elem.intHomeScore}- {elem.intAwayScore}
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
