const request = require('supertest');
const server = require('../server/app');

describe('Endpoint tests', () => {
  describe('sending data about city and country', () => {
    it('should send data from external APIs when given city & country name', () => {
      // TO DO
    });
  });

  describe('handling unknown endpoint', () => {
    it('should respond with status code 400', (done) => {
      return request(server)
        .get('/xyz')
        .expect(400, done);
    });

    it('should send error message', async (done) => {
      return request(server)
        .get('/xyz')
        .expect(400)
        .then((res) => {
          expect(JSON.parse(res.text).log).not.toBe(undefined);
          done();
        });
    });
  });
});
