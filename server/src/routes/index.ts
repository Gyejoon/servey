import * as express from 'express';
import apiRouter from './api';
import { authRequired } from '@/lib/middlewares/auth';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/test', authRequired, (req, res) => {
  res.json({
    msg: 'hello world',
  });
});

export default router;
