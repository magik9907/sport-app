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
        <label htmlFor="searchTeamInput">Search team:</label>
        <input
          type="text"
          ref={searchInput}
          id="searchTeamInput"
          name="searchTeamInput"
        />
        <button type="submit">search</button>
      </form>
    </header>
  )
}

export default Header
