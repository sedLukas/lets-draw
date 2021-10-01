import ICanvas from '../model/ICanvas'
import IFill from '../model/IFill'

export function floodFill(canvas: ICanvas, fill: IFill): ICanvas {
  const {grid, x, y} = canvas
  const {x: fillX, y: fillY, color} = fill

  // if the first point is already a line 'X'
  if (grid[fillX][fillY] === 'X') return canvas

  grid[fillX][fillY] = color

  // Left
  if (fillX - 1 > 0 && grid[fillX - 1][fillY] !== 'X' && grid[fillX - 1][fillY] !== color)
    floodFill({...canvas, grid}, {x: fillX - 1, y: fillY, color})

  // Right
  if (fillX + 1 < x - 1 && grid[fillX + 1][fillY] !== 'X' && grid[fillX + 1][fillY] !== color)
    floodFill({...canvas, grid}, {x: fillX + 1, y: fillY, color})

  // Top
  if (fillY - 1 > 0 && grid[fillX][fillY - 1] !== 'X' && grid[fillX][fillY - 1] !== color)
    floodFill({...canvas, grid}, {x: fillX, y: fillY - 1, color})

  // Bottom
  if (fillY + 1 < y - 1 && grid[fillX][fillY + 1] !== 'X' && grid[fillX][fillY + 1] !== color)
    floodFill({...canvas, grid}, {x: fillX, y: fillY + 1, color})

  return {...canvas, grid}
}
