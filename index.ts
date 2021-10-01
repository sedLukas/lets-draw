import promptSync from 'prompt-sync'

import {drawLine} from './commands/drawLine'
import {drawRectangle} from './commands/drawRectangle'
import {floodFill} from './commands/floodFill'
import {newCanvas} from './commands/newCanvas'
import ICanvas from './model/ICanvas'
import {displayCanvas} from './utils/displayCanvas'
import {parseFill} from './utils/parseFill'
import {parseNewCanvas} from './utils/parseNewCanvas'
import {parseTwoPointsCoordinates} from './utils/parseTwoPointsCoordinates'

const prompt = promptSync()
let canvas: ICanvas

function ask(question: string) {
  const command = prompt(question)
  const commandType = command.charAt(0).toUpperCase()
  let parsedCommand

  switch (commandType) {
    case 'C':
      parsedCommand = parseNewCanvas(command)
      if (parsedCommand) {
        canvas = newCanvas(parsedCommand.x + 2, parsedCommand.y + 2) // +2 is to display borders on both sides
        displayCanvas(canvas)
        ask('Please enter new command.')
      } else ask('Error: command is not properly formatted. Please enter new command.')
      break
    case 'L':
      parsedCommand = canvas && parseTwoPointsCoordinates(command, canvas)
      if (parsedCommand) {
        canvas = drawLine(canvas, parsedCommand)
        displayCanvas(canvas)
        ask('Please enter new command.')
      } else ask('Error: command is not properly formatted. Please enter new command.')
      break
    case 'R':
      parsedCommand = canvas && parseTwoPointsCoordinates(command, canvas)
      if (parsedCommand) {
        canvas = drawRectangle(canvas, parsedCommand)
        displayCanvas(canvas)
        ask('Please enter new command.')
      } else ask('Error: command is not properly formatted. Please enter new command.')
      break
    case 'B':
      parsedCommand = canvas && parseFill(command, canvas)
      if (parsedCommand) {
        canvas = floodFill(canvas, parsedCommand)
        displayCanvas(canvas)
        ask('Please enter new command.')
      } else ask('Error: command is not properly formatted. Please enter new command.')
      break
    case 'Q':
      console.log('Bye bye')
      break
    default:
      ask('Unrecognized command, please enter new command.')
  }
}

ask('Welcome! Please enter your first command.')
