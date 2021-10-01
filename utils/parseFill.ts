import _ from 'lodash'
import ICanvas from '../model/ICanvas'
import IFill from '../model/IFill'

export function parseFill(input: string, canvas: ICanvas): IFill | null {
  const payload = input.substring(2)
  const parsedPayload = payload.split(' ')

  const parsedX = _.parseInt(parsedPayload[0])
  const parsedY = _.parseInt(parsedPayload[1])
  const color = parsedPayload[2]?.charAt(0)

  // validation: x is number, x is a positive number, x is within canvas border
  const x = parsedX && parsedX > 0 && parsedX < canvas.x - 1 ? parsedX : null
  const y = parsedY && parsedY > 0 && parsedY < canvas.y - 1 ? parsedY : null

  return x && y && color ? {x, y, color} : null
}
