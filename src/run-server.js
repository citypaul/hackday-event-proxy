import server from './server-instance';

server.start(error => {
  if (error) {
    // console.error(error);
  } else {
    // console.log('server running');
  }
});
