import { Application, Response, Request, Router, NextFunction } from 'express'
import httpErrors from 'http-errors'

import { response } from './response'
import * as Routes from './routes'

const routers = Object.values(Routes)

const applyRoutes = (app: Application): void => {
  routers.forEach((router: Router): Application => app.use('/api', router))

  // Handling 404 error
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('This route does not exists'))
  })
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    response(
      {
        response: error.response,
        errors: error.errors
      },
      res,
      error.status ?? 400
    )
    next()
  })
}

export { applyRoutes }
