type ExpressRequest = import('express').Request

interface CollegeRequest<T> extends ExpressRequest {
  userId?: number
  headers: import('http').IncomingHttpHeaders & {
    'college-api-key'?: string
  }
  query: T
  params: T
}
