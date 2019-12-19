import { Response, Request } from 'express';
import * as Joi from 'joi';
import * as jwt from 'jwt-simple';
import { validateBody } from '@/lib/utils';
import { getRepository } from 'typeorm';
import { LoginRequest } from 'shared/model/auth';
import User from '@/entity/User';
import hash from '@/lib/hash';
import config from '@/config';

export default {
  login: async (req: Request, res: Response) => {
    const schmea = Joi.object().keys({
      username: Joi.string()
        .min(1)
        .max(20)
        .required(),
      password: Joi.string()
        .min(1)
        .max(20)
        .required(),
    });

    if (!validateBody(req, res, schmea)) return;

    const { username, password } = req.body as LoginRequest;

    const userRepo = getRepository(User);

    const user = await userRepo.findOne({
      username,
    });

    if (!user) {
      res.status(404);
      return res.json({
        msg: '사용자 정보가 존재하지 않습니다.',
      });
    }

    if (user.password !== hash(password)) {
      res.status(401);
      return res.json({
        msg: '패스워드가 일치하지 않습니다.',
      });
    }

    const exp = Date.now() / 1000;

    const token = jwt.encode(
      {
        userId: user.id,
        exp: Number(exp.toFixed()) + (3600 * 24),
      },
      config.auth.key,
      'HS256',
    );

    return res.json({
      accessToken: token,
    });
  },
};
