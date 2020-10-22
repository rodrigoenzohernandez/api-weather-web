const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const path = require('path');

const app = fastify({
  logger: true
})

app.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

app.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

const routes = require("./routes/index");

routes.forEach((route, index) => {
  app.route(route)
})

app.decorate('notFound', (request, reply) => {
  reply.code(404).type('text/html').send('Not Found')
})

const start = async () => {
  try {
    await app.listen(PORT, '0.0.0.0')
    app.log.info(`server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();

module.exports = app;