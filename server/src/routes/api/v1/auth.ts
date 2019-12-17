import * as express from 'express';
import { getRepository } from 'typeorm';
import User from '@/entity/User';

const router = express.Router();

router.get('/login', async (req, res) => {
  const userRepo = getRepository(User);

  const users = await userRepo.find();

  return res.json(users);
});

export default router;
