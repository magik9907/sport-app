import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FavoriteElemType } from '../components/Favorite'
import GenerateTable from '../components/leagueTable/GenerateTable'

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
          console.log(data)
          setLeagueLookupJSON({ ...data.leagues[0] })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])


  const addFavoriteLeague = () => {
    let toSave: FavoriteElemType
    let localStorageArray: { [key: string]: FavoriteElemType } | null
    localStorageArray = JSON.parse(
      localStorage.getItem('favoriteLeagues') || '{}'
    )
    if (localStorageArray === null ) localStorageArray = {}

    if (leagueLookupJSON !== null) {
      toSave = {
        badge: leagueLookupJSON.strBadge,
        name: leagueLookupJSON.strLeague,
        id: id,
      }
      if (!localStorageArray[leagueLookupJSON.strLeagueAlternate]) {
        localStorageArray[leagueLookupJSON.strLeagueAlternate] = toSave
        localStorage.setItem('favoriteLeagues', JSON.stringify(localStorageArray))
      }
    }
  }

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
      <button onClick={addFavoriteLeague}>Favorite</button>
      {Object.keys(leagueLookupJSON).length > 0 ? (
        <>
          <div>
            <p>{leagueLookupJSON.strCountry}</p>
            <h1>{leagueLookupJSON.strLeague}</h1>
            <img
              src={leagueLookupJSON.strBanner}
              title={leagueLookupJSON.strLeagueAlternate}
              alt={leagueLookupJSON.strLeagueAlternate}
            />
            <p>{leagueLookupJSON.strSport}</p>
          </div>
          <GenerateTable
            season={leagueLookupJSON.strCurrentSeason}
            leagueId={leagueLookupJSON.idLeague}
            sport={leagueLookupJSON.strSport}
          />
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
