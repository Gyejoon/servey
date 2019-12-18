import * as crypto from 'crypto';
import config from '@/config';

const { auth } = config;
export default function hash(text: string) {
  const hashed = crypto
    .createHmac('sha256', auth.key)
    .update(text)
    .digest('hex');

  return hashed;
}
