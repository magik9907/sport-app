import { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type TeamProps = {}

  type jsonType = {
  idTeam?: string
  idSoccerXML?: string
  idAPIfootball?: string
  intLoved?: string
  strTeam?: string
  strTeamShort?: string
  strAlternate?: string
  intFormedYear?: string
  strSport?: string
  strLeague?: string
  idLeague?: string
  strLeague2?: string
  idLeague2?: string
  strLeague3?: string
  idLeague3?: string
  strLeague4?: string
  idLeague4?: string
  strLeague5?: string
  idLeague5?: string
  strLeague6?: string
  idLeague6?: string
  strLeague7?: string
  idLeague7?: string
  strDivision?: string
  strManager?: string
  strStadium?: string
  strKeywords?: string
  strRSS?: string
  strStadiumThumb?: string
  strStadiumDescription?: string
  strStadiumLocation?: string
  intStadiumCapacity?: string
  strWebsite?: string
  strFacebook?: string
  strTwitter?: string
  strInstagram?: string
  strDescriptionEN?: string
  strGender?: string
  strCountry?: string
  strTeamBadge?: string
  strTeamJersey?: string
  strTeamLogo?: string
  strTeamFanart1?: string
  strTeamFanart2?: string
  strTeamFanart3?: string
  strTeamFanart4?: string
  strTeamBanner?: string
  strYoutube?: string
  strLocked?: string
}

const Team: FunctionComponent<TeamProps> = (props) => {
  const [json, setJson] = useState<jsonType>({})
  let { id } = useParams()
  useEffect(() => {
    if (id) {
      let url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setJson({ ...data.teams[0] })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])

  return <div>
    <button>Favorite</button>
    <img src={json.strTeamBanner} alt={json.strTeam}/>
    <img src={json.strTeamBadge} alt={json.strTeam}/>
    <h1>{json.strTeam}</h1>
    <p>{json.strCountry}</p>
    <p>{json.intFormedYear}</p>
    <p>{json.strStadium}: {json.intStadiumCapacity}</p>
    <a href={'https'+json.strWebsite}>Website</a>
    <a href={'https'+json.strTwitter}>twiiter</a>
    <a href={'https'+json.strInstagram}>Instagram</a>
    <a href={'https'+json.strFacebook}>facebook</a>
    <a href={'https'+json.strYoutube}>youtube</a>
    <p>{json.strLeague}</p>
    <p>{json.strLeague2}</p>
    <p>{json.strLeague3}</p>
    <p>{json.strLeague4}</p>
    <p>{json.strLeague5}</p>
    <p>{json.strDescriptionEN}</p>
    <p>Stadium</p>
    <p>{json.strStadiumLocation}</p>
    <p>{json.strStadiumDescription}</p>
    <img src={json.strStadiumThumb} alt={json.strStadium}/>
  </div>
}

export default Team
