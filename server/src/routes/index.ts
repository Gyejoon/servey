import * as express from 'express';
import apiRouter from './api';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/test', (req, res) => {
  res.json({
    msg: 'hello world',
  });
});

export default router;
