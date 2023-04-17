const assert = require('assert');
const app = require('../index_test');
const request = require('supertest');


describe('App', function() {

  let server;

  before(async function() {
    server = await app();
  });

  after(function(done) {
    server.close(done);
  });

  it('should return 200', function(done) {
    request(server)
    .get('/') 
    .expect(200, done);
  });
});