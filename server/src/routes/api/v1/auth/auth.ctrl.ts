import { Response, Request } from 'express';
import * as Joi from 'joi';
import { validateBody } from '@/lib/utils';
import { getRepository } from 'typeorm';
import User from '@/entity/User';
import hash from '@/lib/hash';

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

    type RequestBody = {
      username: string;
      password: string;
    };

    const { username, password } = req.body as RequestBody;

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

    return res.json({
      accessToken: 'test',
    });
  },
};
