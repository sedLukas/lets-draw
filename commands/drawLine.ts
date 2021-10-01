import ICanvas from '../model/ICanvas'
import ITwoPointsCoordinates from '../model/ITwoPointsCoordinates'

export function drawLine(canvas: ICanvas, line: ITwoPointsCoordinates): ICanvas {
  const {grid} = canvas
  const lineLength = (Math.abs(line.x1 - line.x2) || Math.abs(line.y1 - line.y2)) + 1
  const isVertical = !!Math.abs(line.x1 - line.x2)

  for (let i = 0; i < lineLength; i++) {
    isVertical ? (grid[line.x1 + i][line.y1] = 'X') : (grid[line.x1][line.y1 + i] = 'X')
  }
  return {...canvas, grid}
}
