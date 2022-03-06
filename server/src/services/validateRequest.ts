import { Request, Response } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';
import { setResponse } from './setResponse';

export function validateRequest(req: Request, res: Response) {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    return setResponse(
      res,
      400,
      `Registration error: ${
        errors.array({
          onlyFirstError: true,
        })[0].msg
      }`
    );
  }
}
