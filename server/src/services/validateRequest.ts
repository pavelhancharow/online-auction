import { Request } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';
import { ErrorCode } from '../error/ErrorType';
import { ErrorException } from '../error/ErrorException';

export function validateRequest(req: Request) {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ErrorException(
      ErrorCode.FieldValidation,
      errors.array({ onlyFirstError: true })[0].msg
    );
  }
}
