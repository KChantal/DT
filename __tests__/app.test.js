const request = require('supertest');
const server = require('../server/app');

describe('Endpoint tests', () => {
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
