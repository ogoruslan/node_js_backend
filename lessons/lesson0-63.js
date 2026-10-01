import createDebug from 'debug';
import express from 'express';

//  $env:DEBUG='myapp:server'; node .\lessons\lesson0-63.js

const debug = createDebug('myapp:server');
const app = express();

const port = normalizePort(process.env.PORT || '3000');

app.listen(port, () => {
  debug('Listening on port ' + port);
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

app.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}