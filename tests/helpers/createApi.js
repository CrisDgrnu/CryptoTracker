const supertest = require('supertest');
const { app } = require('../../app/app');

module.exports = supertest(app);
