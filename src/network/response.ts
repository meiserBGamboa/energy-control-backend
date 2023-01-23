import { Response } from 'express'

const response = (message: unknown, res: Response, status: number): void => {
  res.status(status).send(message)
}

export { response }
