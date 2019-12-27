import * as express from 'express';
import authCtrl from './auth.ctrl';
import { authRequired } from '@/lib/middlewares/auth';

const router = express.Router();

router.post('/login', authCtrl.login);
router.get('/me', authRequired, authCtrl.currentUser);

export default router;
