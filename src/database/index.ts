import { Dialect, Sequelize } from 'sequelize'
import { energyControlFactory, smartHomeFactory } from './postgresql'

const dbHost = process.env.DB_HOST as string
const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
// const dbUri = process.env.DB_URI as string
const dbPassword = process.env.DB_PASS
const dbDriver = process.env.DB_DRIVER as Dialect

export const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver,
  host: dbHost,
  logging: false,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

export const SmartHome = smartHomeFactory(sequelizeConnection)
export const EnergyControl = energyControlFactory(sequelizeConnection)

export const endConnection = async (): Promise<void> => {
  try {
    if (process.env.ENV !== 'local') {
      await sequelizeConnection.close()
      console.log('Closed connection successfully')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(e.message)
    console.error(e)
    process.exit(1)
  }
}

export * from './postgresql'
