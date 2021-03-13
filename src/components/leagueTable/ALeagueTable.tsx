import { ReactElement } from "react"

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
      <table>
        {this.GenerateTableHead()}
        {this.GenerateTableBody()}
      </table>
    )
  }

  GenerateTableHead() {
    return (
      <thead>
        <tr>
          {Object.entries(this.columnName).map(([key,value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      </thead>
    )
  }

  GenerateTableBody() {
    const keysList: string[] = Object.keys(this.columnName)
    let content = this.bodyContent.map((elem: any, i: number) => {
      let cols = keysList.map((key, y) => {
        return <td key={`${i}-${key}${y}`}>{elem[key]}</td>
      })
      return <tr key={i}>{cols}</tr>
    })
    return <tbody>{content}</tbody>
  }
}

export type {ILeagueTable}
export {ALeagueTable}
