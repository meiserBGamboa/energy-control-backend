import { Response, Router, NextFunction } from 'express'
import { response } from 'network/response'
import { EnergyControlService } from 'services'

const ControlEnergy = Router()
const router = Router()

ControlEnergy.use('/control-energy', router)

router
  .route('/list-homes')
  .get(
    async (
      req: CustomRequest,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        const controlEnergy = new EnergyControlService('test')
        const list = await controlEnergy.process({ type: 'listHomes' })

        response({ success: true, message: list }, res, 200)
      } catch (e) {
        next(e)
      }
    }
  )

router
  .route('/list-control-energy')
  .get(
    async (
      req: CustomRequest,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        const controlEnergy = new EnergyControlService('list')
        const list = await controlEnergy.process({ type: 'listEnergy' })

        response({ success: true, data: list }, res, 200)
      } catch (e) {
        next(e)
      }
    }
  )

router
  .route('/register-energy')
  .post(
    async (
      req: CustomRequest,
      res: Response,
      next: NextFunction
    ): Promise<void> => {
      try {
        const { body } = req
        const controlEnergy = new EnergyControlService(
          body as DtoEnergyControlRegisterEnergyRequest
        )
        const list = await controlEnergy.process({ type: 'registerEnergy' })

        response({ success: true, message: list }, res, 200)
      } catch (e) {
        next(e)
      }
    }
  )
export { ControlEnergy }
