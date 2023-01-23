class CustomError extends Error {
  public response = false
  constructor(public message: string, public errors?: string[]) {
    super(message)

    if (!this.errors) this.errors = [message]
    else this.errors.push(message)
  }
}

export { CustomError }
