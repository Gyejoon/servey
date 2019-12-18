import * as express from 'express';
import authCtrl from './auth.ctrl';

const router = express.Router();

router.post('/login', authCtrl.login);

export default router;
