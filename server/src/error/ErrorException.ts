import { ErrorCode, ErrorMessage } from './ErrorType';

export class ErrorException extends Error {
  public status: number;

  constructor(code: string = ErrorCode.UnknownError, message = '') {
    super(code);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = code;
    this.status = 500;

    switch (code) {
      case ErrorCode.Unauthenticated:
        this.status = 403;
        break;
      case ErrorCode.DuplicateEntityError:
        this.status = 400;
        break;
      case ErrorCode.WrongPassword:
        this.status = 400;
        break;
      case ErrorCode.RoleEntityError:
        this.status = 400;
        break;
      case ErrorCode.FieldValidation:
        this.status = 400;
        ErrorMessage.FieldValidation = message;
        break;
      case ErrorCode.UserNotFound:
        this.status = 404;
        break;
      case ErrorCode.LotNotFound:
        this.status = 404;
        break;
      case ErrorCode.NoAccessRights:
        this.status = 403;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}
