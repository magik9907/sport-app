import { useEffect, useState } from 'react'
import LeagueTable from './LeagueTable'

const GenerateTable = (props: { leagueId: string; sport: string }) => {
  const [seasonJSON, setSeasonJSON] = useState<{ [key: string]: string }[]>([])
  const [season, setSeason] = useState<string>('')

  useEffect(() => {
    let seasonString: string
    let date = new Date()
    let year = date.getFullYear()
    if (date.getMonth() <= 5) seasonString = `${year - 1}-${year}`
    else seasonString = `${year}-${year + 1}`

    let url = `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${props.leagueId}&s=${seasonString}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setSeasonJSON(data.table)
      })
      .catch((error) => {
        console.error(error)
      })
    setSeason(seasonString)
  }, [])

  return (
    <div>
      {seasonJSON.length === 0 ? (
        <p>fetchning...</p>
      ) : (
        <>
          <p>{season}</p>
          <div>
            <LeagueTable json={seasonJSON} sport={props.sport}></LeagueTable>
          </div>
        </>
      )}
    </div>
  )
}

export default GenerateTable
