import _ from 'lodash'
import IParsedCanvasSize from '../model/IParsedCanvasSize'

export function parseNewCanvas(input: string): IParsedCanvasSize | null {
  const payload = input.substring(2)
  const parsedPayload = payload.split(' ')

  const parsedX = _.parseInt(parsedPayload[0])
  const parsedY = _.parseInt(parsedPayload[1])

  const x = parsedX && parsedX > 0 ? parsedX : null
  const y = parsedY && parsedY > 0 ? parsedY : null

  return x && y ? {x, y} : null
}
