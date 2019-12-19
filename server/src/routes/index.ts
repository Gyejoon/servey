import * as express from 'express';
import apiRouter from './api';
import { authRequired } from '@/lib/middlewares/auth';
import hash from '@/lib/hash';

const router = express.Router();

router.use('/api', apiRouter);
router.get('/auth-test', authRequired, (req, res) => {
  res.json({
    userId: req.app.get('userId'),
  });
});
router.get('/test', (req, res) => {
  res.json({
    msg: hash('admin1234'),
  });
});

export default router;
