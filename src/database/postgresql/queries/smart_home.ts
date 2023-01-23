import { SmartHome } from 'database'
import { SmartHomeInstance } from '..'

export const getSmartHome = async (id: number): Promise<SmartHomeInstance> => {
  try {
    if (!id) throw new Error('id es necesario para la consulta.')

    const smartHomeData = await SmartHome.findOne({
      where: {
        id
      }
    })

    if (!smartHomeData)
      throw new Error('no se encontro registro de smart home.')

    return smartHomeData
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
