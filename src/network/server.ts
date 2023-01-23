import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { applyRoutes } from './router'
import { sequelizeConnection } from '../database'

const PORT = (process.env.PORT as string) || '1996'

class Server {
  #app: express.Application

  constructor() {
    this.#app = express()
    this.#config()
    this.#sequelize()
  }

  #config() {
    this.#app.use(cors())
    this.#app.use(morgan('dev'))
    this.#app.use(express.json())
    this.#app.use(express.urlencoded({ extended: false }))
    this.#app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
        res.header('Access-Control-Allow-Origin', '*')
        res.header(
          'Access-Control-Allow-Headers',
          'Authorization, Content-Type'
        )
        next()
      }
    )

    applyRoutes(this.#app)
  }

  async #sequelize(): Promise<void> {
    try {
      await sequelizeConnection.authenticate()
      console.log('Database connection established')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error(e.message)
      process.exit(1)
    }
  }

  public start(): void {
    this.#app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`)
    })
  }
}

const server = new Server()

export { server as Server }
