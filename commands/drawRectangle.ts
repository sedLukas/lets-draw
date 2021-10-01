import ICanvas from '../model/ICanvas'
import ITwoPointsCoordinates from '../model/ITwoPointsCoordinates'

export function drawRectangle(canvas: ICanvas, rectangle: ITwoPointsCoordinates): ICanvas {
  const {grid} = canvas
  const rectangleSideXLength = Math.abs(rectangle.x1 - rectangle.x2) + 1
  const rectangleSideYLength = Math.abs(rectangle.y1 - rectangle.y2) + 1

  for (let i = 0; i < rectangleSideXLength; i++) {
    grid[rectangle.x1 + i][rectangle.y1] = 'X'
    grid[rectangle.x1 + i][rectangle.y2] = 'X'
  }

  for (let i = 0; i < rectangleSideYLength; i++) {
    grid[rectangle.x1][rectangle.y1 + i] = 'X'
    grid[rectangle.x2][rectangle.y1 + i] = 'X'
  }

  return {...canvas, grid}
}
