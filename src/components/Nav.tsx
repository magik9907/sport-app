import { Link } from 'react-router-dom'
const linkList = [
  { name: 'Home Page', path: '/' },
  { name: 'Leagues', path: '/leagues' },
  { name: 'Teams', path: '/teams' },
]

const Nav = () => {
  return (
    <nav>
      <ul>
        {linkList.map((obj, index) => (
          <li key={index}>
            <Link to={obj.path}>{obj.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
