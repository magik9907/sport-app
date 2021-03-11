import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LeagueTable from '../components/LeagueTable'

// type LeagueDescribePropsType = {
//  json:{	[key:string]:string}
// }
type LeagueDescribeType = {
  [key: string]: string
}

type LeagueProps = {}

const ExternalLink = (props: { url: string; children: React.ReactNode }) => {
  return (
    <a href={'https://' + props.url} rel="noopener noreferrer" target="blank">
      {props.children}
    </a>
  )
}

const League: FunctionComponent<LeagueProps> = () => {
  const [leagueLookupJSON, setLeagueLookupJSON] = useState<LeagueDescribeType>(
    {}
  )
  let { id } = useParams()
  useEffect(() => {
    if (id) {
      let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLeagueLookupJSON({ ...data.leagues[0] })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])

  let fanArts: React.ReactNodeArray = []
  for (let i = 1; ; i++) {
    let key = 'strFanart' + i
    if (!leagueLookupJSON[key]) break
    fanArts.push(
      <img
        key={key}
        src={leagueLookupJSON[key]}
        title={leagueLookupJSON.strLeague}
        alt={leagueLookupJSON.strLeague}
      />
    )
  }

  return (
    <div>
      {Object.keys(leagueLookupJSON).length > 0 ? (
        <><div>
          <p>{leagueLookupJSON.strCountry}</p>
          <h1>{leagueLookupJSON.strLeague}</h1>
          <img
            src={leagueLookupJSON.strBanner}
            title={leagueLookupJSON.strLeagueAlternate}
            alt={leagueLookupJSON.strLeagueAlternate}
          />
          <p>{leagueLookupJSON.strSport}</p>
          </div>
          <LeagueTable leagueId={leagueLookupJSON.idLeague}/>
          <div>
            <p>{leagueLookupJSON.strDescriptionEN}</p>
            <ExternalLink url={leagueLookupJSON.strYoutube}>
              Youtube
            </ExternalLink>
            <ExternalLink url={leagueLookupJSON.strWebsite}>
              Website
            </ExternalLink>
            <ExternalLink url={leagueLookupJSON.strTwitter}>
              Twitter
            </ExternalLink>
            <ExternalLink url={leagueLookupJSON.strFacebook}>
              Facebook
            </ExternalLink>
            {fanArts}
          </div>
        </>
      ) : (
        <p>fetching</p>
      )}
    </div>
  )
}

export default League
