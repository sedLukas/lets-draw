import _ from 'lodash'
import ICanvas from '../model/ICanvas'
import ITwoPointsCoordinates from '../model/ITwoPointsCoordinates'

export function parseTwoPointsCoordinates(input: string, canvas: ICanvas): ITwoPointsCoordinates | null {
  const payload = input.substring(2)
  const parsedPayload = payload.split(' ')

  const parsedX1 = _.parseInt(parsedPayload[0])
  const parsedY1 = _.parseInt(parsedPayload[1])
  const parsedX2 = _.parseInt(parsedPayload[2])
  const parsedY2 = _.parseInt(parsedPayload[3])

  // validation: x is number, x is a positive number, x is within canvas border
  const x1 = parsedX1 && parsedX1 > 0 && parsedX1 < canvas.x - 1 ? parsedX1 : null
  const y1 = parsedY1 && parsedY1 > 0 && parsedY1 < canvas.y - 1 ? parsedY1 : null
  const x2 = parsedX2 && parsedX2 > 0 && parsedX2 < canvas.x - 1 ? parsedX2 : null
  const y2 = parsedY2 && parsedY2 > 0 && parsedY2 < canvas.y - 1 ? parsedY2 : null

  return x1 && y1 && x2 && y2 ? {x1, y1, x2, y2} : null
}
