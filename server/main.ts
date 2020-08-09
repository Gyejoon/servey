import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'servey-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    }),
  );

  server.use('/api', (_: Request, res: Response) => {
    res.json({
      body: 'hello',
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on 3000');
  });
});
