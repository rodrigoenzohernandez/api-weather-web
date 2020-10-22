'use strict';

const fastify = require('../app');

describe('server test', () => {
  afterAll(() => {
    fastify.close();
  });

  test('CP01 - Test index route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP02 - test location route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/location'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP03 - test current route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/current'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP03 - test current route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/current'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP04 - test current route with city', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/current/Barracas'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP05 - test forecast route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/forecast'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP06 - test forecast route with city', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/forecast/Barracas'
    });
    expect(response.statusCode).toBe(200);
    done();
  });

  test('CP07 - force wrong route', async (done) => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/561561861'
    });
    expect(response.statusCode).toBe(404);
    done();
  });
});
