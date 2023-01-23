import { CustomError } from 'utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandling = (e: any, message?: string): never => {
  console.error(e)

  if (e instanceof CustomError) throw e

  throw new CustomError(message ?? e.message)
}

export { errorHandling }
export * from './messages'
