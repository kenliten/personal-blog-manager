const { exist } = require('chai').should();
const app = require('../app');

describe('App', function() {
  describe('#exists', function() {
    it('should exists', function() {
      exist(app)
    });
  });
});
