import { getSmartHome, setEnergyControl } from 'database'
import { errorHandling } from '../utils'

type process = {
  type: 'listHomes' | 'registerEnergy'
}

type DtoEnergyControlServiceRequest =
  | string
  | DtoEnergyControlRegisterEnergyRequest

type DtoEnergyControlServiceResponse = string

class EnergyControlService {
  #args: DtoEnergyControlServiceRequest

  constructor(args: DtoEnergyControlServiceRequest) {
    this.#args = args
  }

  public process({ type }: process): Promise<DtoEnergyControlServiceResponse> {
    switch (type) {
      case 'listHomes':
        return this.#listhomes()
      case 'registerEnergy':
        return this.#registerEnergy()
    }
  }

  async #listhomes(): Promise<DtoEnergyControlServiceResponse> {
    try {
      const args = this.#args as string

      const home = await getSmartHome(1)
      console.log(JSON.stringify(home))

      return args
    } catch (error) {
      console.log('Errors from list homes: ', JSON.stringify(error))

      return errorHandling(error, 'Error in register webhook')
    }
  }

  async #registerEnergy(): Promise<DtoEnergyControlServiceResponse> {
    try {
      const args = this.#args as DtoEnergyControlRegisterEnergyRequest
      const { smartHome, irms, wats } = args

      const register = await setEnergyControl(
        smartHome,
        new Date().toISOString(),
        irms,
        wats
      )
      console.log('Register Energy: ', JSON.stringify(register))

      return 'completed'
    } catch (error) {
      console.log('Errors from list homes: ', JSON.stringify(error))

      return errorHandling(error, 'Error in register webhook')
    }
  }
}

export { EnergyControlService }
