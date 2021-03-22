import { Link } from 'react-router-dom'
import './nav.scss'
const linkList = [
  { name: 'Home Page', path: '/' },
  { name: 'Leagues', path: '/leagues' },
]

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {linkList.map((obj, index) => (
            <li key={index} className="nav-item">
              <Link to={obj.path} className="nav-link">
                {obj.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
