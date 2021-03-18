import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import Search from '../components/Search'
type TeamsProps = {}

const Teams: FunctionComponent<TeamsProps> = (props) => {
  const { name } = useParams()

  return name ? <Search name={name} /> : <p>Teams</p>
}

export default Teams
