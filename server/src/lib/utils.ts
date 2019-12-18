import * as Joi from 'joi';
import { Request, Response } from 'express';

export const validateBody = (
  req: Request,
  res: Response,
  schema: Joi.SchemaLike,
) => {
  const validation = Joi.validate(req.body, schema);
  if (validation.error) {
    res.status(400);
    res.json({
      name: 'WRONG_SCHEMA',
      payload: validation.error,
    });
    return false;
  }
  return true;
};
