import ICanvas from '../model/ICanvas'

export function newCanvas(x: number, y: number): ICanvas {
  const grid = Array.from(Array(x), () => new Array(y))

  // draw borders
  for (let i = 0; i < y; i++) {
    grid[0][i] = '|'
    grid[x - 1][i] = '|'
  }
  for (let i = 0; i < x; i++) {
    grid[i][0] = '-'
    grid[i][y - 1] = '-'
  }

  return {grid, x, y}
}
