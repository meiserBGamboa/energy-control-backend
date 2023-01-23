// eslint-disable-next-line @typescript-eslint/no-explicit-any
enum ErrorForUserEn {
  NOT_FOUND = 'The requested user does not exists',
  NOT_PASSWORD = 'The password is incorrect',
  USER_EXISTS = 'The user is already registered',
  NOTHING_TO_DELETE = 'There is no user to be deleted',
  NOT_API_KEY = 'The college-api-key not found in header.'
}

enum ErrorForUserEs {
  NOT_FOUND = 'El usuario solicitado no existe',
  NOT_PASSWORD = 'La contraseña es incorrecta',
  USER_EXISTS = 'El usuario ya está registrado',
  NOTHING_TO_DELETE = 'No hay ningún usuario para eliminar',
  NOT_API_KEY = 'College-api-key no encontrada en header.'
}

enum MessageForUserEn {
  ALL_USERS_DELETED = 'All the users were deleted successfully',
  USER_DELETED = 'The requested user was successfully deleted'
}

enum MessageForUserEs {
  ALL_USERS_DELETED = 'Todos los usuarios fueron eliminados con éxito.',
  USER_DELETED = 'El usuario solicitado fue eliminado con éxito'
}

export type EFUserLanguage = keyof typeof ErrorForUserEn
export type MFUserLanguage = keyof typeof MessageForUserEn
export type EFUserEnum = ErrorForUserEn | ErrorForUserEs
export type MFUserEnum = MessageForUserEn | MessageForUserEs

export const getErrorCollegeUser = (
  message: EFUserLanguage,
  language = 'ES'
) => {
  return language === 'EN' ? ErrorForUserEn[message] : ErrorForUserEs[message]
}

export const getMessageCollegeUser = (
  message: MFUserLanguage,
  language = 'ES'
) => {
  return language === 'EN'
    ? MessageForUserEn[message]
    : MessageForUserEs[message]
}
