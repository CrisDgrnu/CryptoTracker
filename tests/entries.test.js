const api = require('./helpers/createApi');
const closeConnections = require('./helpers/closeConnections');
const { ethEntry, initialEntries } = require('./helpers/initialData');

const {
  getAllEntries,
  initializeEntries,
  removeOneField,
} = require('./helpers/helpers');

beforeEach(async () => await initializeEntries());

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

test('Entries currency have BTC and AVAX', async () => {
  const { data } = await getAllEntries();

  expect(data).toContain('AVAX');
  expect(data).toContain('BTC');
});

test('Entry created', async () => {
  await api
    .post('/entry')
    .send(ethEntry)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const { data } = await getAllEntries();

  expect(data.length).toBe(initialEntries.length + 1);
  expect(data).toContain('ETH');
});

test('Cannot create an entry without content', async () => {
  const entry = {};

  await api
    .post('/entry')
    .send(entry)
    .expect(400)
    .expect('Content-Type', /application\/json/);
});

test('Cannot create an entry without required fields', async () => {
  const fields = Object.keys(ethEntry);

  for (field of fields) {
    const entryClone = removeOneField(ethEntry, field);

    await api
      .post('/entry')
      .send(entryClone)
      .expect(400)
      .expect('Content-Type', /application\/json/);
  }
});

afterAll(() => {
  closeConnections();
});
