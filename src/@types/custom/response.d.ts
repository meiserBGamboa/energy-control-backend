type ExpressResponse = import('express').Response

interface CustomResponse extends ExpressResponse {
  newValue?: string
}

interface CollegeResponse {
  response: boolean = true
  message?: string
  data?: string
}
