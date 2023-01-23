import { EnergyControl } from 'database'
import { EnergyControlInstance } from '..'

export const setEnergyControl = async (
  idHome: number,
  dateRegis: string,
  i: number,
  wats: number
): Promise<EnergyControlInstance> => {
  if (!idHome) throw new Error('idHome es necesario.')

  const data = await EnergyControl.create({
    id_home: idHome,
    date_registration: dateRegis,
    i_rms: i,
    wats
  })

  if (!data) throw new Error('No se registro datos.')

  return data
}

export const listEnergy = async (
  idHome: number
): Promise<EnergyControlInstance[]> => {
  if (!idHome) throw new Error('idHome es necesario.')

  const data = await EnergyControl.findAll({
    where: {
      id_home: idHome
    },
    order: [['date_registration', 'ASC']]
  })

  return data
}
