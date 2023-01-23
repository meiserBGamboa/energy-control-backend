import {
  EFUserLanguage,
  MFUserLanguage,
  getErrorCollegeUser,
  getMessageCollegeUser,
  EFUserEnum,
  MFUserEnum
} from './user'

import {
  EGenericLanguage,
  MGenericLanguage,
  getErrorCollegeGeneric,
  getMessageCollegeGeneric,
  EGenericEnum,
  MGenericEnum
} from './generic'

type ProcessError = {
  type: 'EUser' | 'EGeneric'
  message: EFUserLanguage | EGenericLanguage
  language?: string
}

type DtoError = EFUserEnum | EGenericEnum

export const getErrorCollege = ({
  type,
  message,
  language
}: ProcessError): DtoError => {
  switch (type) {
    case 'EUser':
      return getErrorCollegeUser(message as EFUserLanguage, language)
    case 'EGeneric':
      return getErrorCollegeGeneric(message as EGenericLanguage, language)
  }
}

type ProcessMessage = {
  type: 'MUser' | 'MGeneric'
  message: MFUserLanguage | MGenericLanguage
  language?: string
}

type DtoMessage = MFUserEnum | MGenericEnum

export const getMessageCollege = ({
  type,
  message,
  language
}: ProcessMessage): DtoMessage => {
  switch (type) {
    case 'MUser':
      return getMessageCollegeUser(message as MFUserLanguage, language)
    case 'MGeneric':
      return getMessageCollegeGeneric(message as MGenericLanguage, language)
  }
}
