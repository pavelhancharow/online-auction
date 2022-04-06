interface ErrorType {
  [index: string]: string;
}

export enum ErrorCode {
  Unauthenticated = 'Unauthenticated',
  DuplicateEntityError = 'DuplicateEntityError',
  RoleEntityError = 'RoleEntityError',
  UserNotFound = 'UserNotFound',
  LotNotFound = 'LotNotFound',
  WrongPassword = 'WrongPassword',
  FieldValidation = 'FieldValidation',
  UnknownError = 'UnknownError',
  NoAccessRights = 'NoAccessRights',
  InvalidPath = 'InvalidPath',
}

export const ErrorMessage: ErrorType = {
  [ErrorCode.Unauthenticated]: 'User not authorized',
  [ErrorCode.DuplicateEntityError]: 'User already exists',
  [ErrorCode.RoleEntityError]: 'Role not found',
  [ErrorCode.UserNotFound]: 'User not found',
  [ErrorCode.LotNotFound]: 'Lot not found',
  [ErrorCode.WrongPassword]: 'Wrong password entered',
  [ErrorCode.FieldValidation]: 'Field value is incorrect',
  [ErrorCode.UnknownError]: 'Something is wrong',
  [ErrorCode.NoAccessRights]: 'No access rights to change password',
  [ErrorCode.InvalidPath]: 'Invalid route path',
};
