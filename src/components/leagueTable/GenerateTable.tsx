import { useEffect, useState } from 'react'
import LeagueTable from './LeagueTable'
import { Link } from 'react-router-dom'
const GenerateTable = (props: {
  season: string
  leagueId: string
  sport: string
}) => {
  const [seasonJSON, setSeasonJSON] = useState<
    { [key: string]: string }[] | string
  >([])

  useEffect(() => {
    let url = `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${props.leagueId}&s=${props.season}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(url, data)
        if (data) setSeasonJSON(data.table)
      })
      .catch((error) => {
        setSeasonJSON('No data')
      })
  }, [])

  return typeof seasonJSON !== 'string' ? (
    <div>
      {seasonJSON.length === 0 ? (
        <p>fetchning...</p>
      ) : (
        <>
          <p>
            <Link
              to={`/season/${seasonJSON[0].idLeague}/${props.season}`}
              className="text-info"
            >
              {props.season}
            </Link>
          </p>
          <div>
            <LeagueTable json={seasonJSON} sport={props.sport}></LeagueTable>
          </div>
        </>
      )}
    </div>
  ) : (
    <></>
  )
}

export default GenerateTable
