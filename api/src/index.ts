/**
 * Simple API 
 */

import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
import { Request, Response } from 'express'

// App constructor
const app: express.Application = express()

// Cors Domain
app.use(cors())
// Body Parser
app.use(bodyParser.json())
// Para obter informações POST e / ou parâmetros de URL
app.use(bodyParser.urlencoded({ extended: true }))
// Morgan <LOG HTTP>
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello!')
})

// Listen server
app.listen(3002, () => {
  console.log(`App is listening on port 3002!`)
})