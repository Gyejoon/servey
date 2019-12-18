import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jwt-simple';
import config from '@/config';

const getTokenFromHeader = (authorization?: string) => {
  if (authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }

  return;
};

export const authRequired = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = getTokenFromHeader(req.headers.authorization);

  if (!token) {
    res.status(401);
    return res.json({
      msg: 'NOT_AUTHORIZED',
    });
  }

  try {
    const decoded = jwt.decode(token, config.auth.key);

    if (decoded) {
      req.app.set('userId', decoded.userId);
    }
  } catch (e) {
    res.status(401);
    return res.json({
      msg: 'INVALID_TOKEN',
    });
  }

  return next();
};
