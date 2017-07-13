// import Boom from 'boom';

export default {
  method: 'POST',
  path: '/api/events',
  config: {
    handler: (request, reply) => {
      reply(request.payload);
    }
  }
};
