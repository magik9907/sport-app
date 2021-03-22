import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
interface ILeagueTable {
  GenerateTable(): ReactElement
  GenerateTableHead(): ReactElement
  GenerateTableBody(): ReactElement
}

abstract class ALeagueTable<T> implements ILeagueTable {
  abstract columnName: { [key: string]: string }
  bodyContent: T[] = []
  constructor(json: T[]) {
    this.bodyContent = json
  }

  GenerateTable() {
    return (
      <table className="table-dark">
        {this.GenerateTableHead()}
        {this.GenerateTableBody()}
      </table>
    )
  }

  GenerateTableHead() {
    return (
      <thead>
        <tr>
          {Object.entries(this.columnName).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
        </tr>
      </thead>
    )
  }

  GenerateTableBody() {
    const keysList: string[] = Object.keys(this.columnName)
    let content = this.bodyContent.map((elem: any, i: number) => {
      let cols = keysList.map((key, y) => {
        if (key === 'strTeam')
          return (
            <td key={`${i}-${key}${y}`}>
              <Link
                to={'/team/' + elem.idTeam}
                className="text-primary font-uppercase"
              >
                <img src={elem.strTeamBadge} title={elem.strTeam} alt="" />
                {elem.strTeam}
              </Link>
            </td>
          )

        return <td key={`${i}-${key}${y}`}>{elem[key]}</td>
      })
      return <tr key={i}>{cols}</tr>
    })
    return <tbody>{content}</tbody>
  }
}

export type { ILeagueTable }
export { ALeagueTable }
