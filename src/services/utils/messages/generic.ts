enum GenericErrorsEn {
  INTERNAL_SERVER_ERROR = 'Something went wrong',
  PARAMS_NOT_FOUND = 'params not found',
  NOT_FOUND = 'Something is not right missing fields'
}

enum GenericErrorsEs {
  INTERNAL_SERVER_ERROR = 'Algo salió mal',
  PARAMS_NOT_FOUND = 'parámetros no encontrados',
  NOT_FOUND = 'Algo no anda bien falta campos'
}

enum GenericMessageEn {
  INTERNAL_SERVER_ERROR = 'Something went wrong'
}

enum GenericMessageEs {
  INTERNAL_SERVER_ERROR = 'Something went wrong'
}

export type EGenericLanguage = keyof typeof GenericErrorsEn
export type MGenericLanguage = keyof typeof GenericMessageEn
export type EGenericEnum = GenericErrorsEn | GenericErrorsEs
export type MGenericEnum = GenericMessageEn | GenericMessageEs

export const getErrorCollegeGeneric = (
  message: EGenericLanguage,
  language = 'ES'
) => {
  return language === 'EN' ? GenericErrorsEn[message] : GenericErrorsEs[message]
}

export const getMessageCollegeGeneric = (
  message: MGenericLanguage,
  language = 'ES'
) => {
  return language === 'EN'
    ? GenericMessageEn[message]
    : GenericMessageEs[message]
}
