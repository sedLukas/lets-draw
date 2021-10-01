import ICanvas from '../model/ICanvas'

export function displayCanvas({grid, x, y}: ICanvas): void {
  for (let j = 0; j < y; j++) {
    let oneRow = ''
    for (let i = 0; i < x; i++) {
      oneRow += grid[i][j] ? grid[i][j] : ' '
    }
    console.log(oneRow)
  }
}
