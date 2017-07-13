import Hapi from 'hapi';
import config from 'config';
import postEvent from './api/events/post-event';

const serverConfig = config.get('server');
const server = new Hapi.Server();

server.connection({
  host: serverConfig.host,
  port: serverConfig.port
});

server.route(postEvent);

export default server;
