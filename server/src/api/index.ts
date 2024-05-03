import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();
import app from '../app';

process.on('uncaughtException', (err: Error) => {
  console.log('💥 uncaughtException', err.name, "-", err.message);
  server.close(() => {
    process.exit(1);
  });
});

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on('unhandledRejection', (err: Error) => {
  console.log('💥 unhandledRejection:', err.name, "-", err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});
