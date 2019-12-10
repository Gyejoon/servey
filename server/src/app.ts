import * as path from 'path';
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import logger from './logger';

const stopServer = async (server: http.Server, signal?: string) => {
  logger.info(`Stopping server with signal: ${signal}`);
  await server.close();
  process.exit();
};

async function runServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

  const server = app.listen(5000, () => {
    logger.info('Example app listening on port 5000!');
  });
}

runServer()
  .then(() => {
    logger.info('run succesfully');
  })
  .catch((ex: Error) => {
    logger.error('Unable run:', ex);
  });
