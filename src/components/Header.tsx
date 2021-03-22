import React, { useRef } from 'react'
import Nav from './Nav'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const searchInput = useRef<HTMLInputElement>(null)
  const history = useHistory()
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    debugger
    history.push('/teams/' + searchInput.current?.value || '')
  }
  return (
    <header>
      <Nav />
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <label htmlFor="searchTeamInput" className="input-group-text">Search team:</label>
          <input
            type="text"
            ref={searchInput}
            id="searchTeamInput"
            name="searchTeamInput"
            className="form-control"
          />
          <button type="submit" className="btn bg-white btn-outline-secondary">
            search
          </button>
        </div>
      </form>
    </header>
  )
}

export default Header
