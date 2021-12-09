const mongoose = require('mongoose');
const supertest = require('supertest');
const { app, server } = require('../app/app');
const Entry = require('../app/models/Entry');

const api = supertest(app);

const initialEntries = [
  {
    _id: '61ae91c9adb2f72092709f9c',
    currency: 'AVAX',
    dateIn: '2021-11-01T00:00:00.000Z',
    dateOut: '2021-12-01T00:00:00.000Z',
    priceIn: 125,
    priceOut: 0,
    tokensIn: 50,
    tokensOut: 30,
    balanceIn: 5000,
    balanceOut: 10000,
    performance: 100,
    gains: 5000,
    user: '61af5d627f1c8ca294ce05d9',
    __v: 0,
  },
  {
    _id: '61ae92b57fa4e98f270c6dea',
    currency: 'BTC',
    dateIn: '2021-11-01T00:00:00.000Z',
    dateOut: '2021-12-01T00:00:00.000Z',
    priceIn: 125,
    priceOut: 0,
    tokensIn: 50,
    tokensOut: 30,
    balanceIn: 5000,
    balanceOut: 10000,
    performance: 100,
    gains: 5000,
    user: '61af5d627f1c8ca294ce05d9',
    __v: 0,
  },
];

beforeEach(async () => {
  await Entry.deleteMany({});

  const entry0 = new Entry(initialEntries[0]);
  await entry0.save();

  const entry1 = new Entry(initialEntries[1]);
  await entry1.save();
});

test('There are 2 entries', async () => {
  await api
    .get('/entry')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('Entries are returned as JSON', async () => {
  const res = await api.get('/entry');

  expect(res.body).toHaveLength(initialEntries.length);
});

test('Entries currency are BTC as AVAX', async () => {
  const res = await api.get('/entry');

  expect(res.body[0].currency).toBe('AVAX');
  expect(res.body[1].currency).toBe('BTC');
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});
