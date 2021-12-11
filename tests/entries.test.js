const api = require('./helpers/createApi');
const closeConnections = require('./helpers/closeConnections');
const { ethEntry, initialEntries } = require('./helpers/initialData');

const {
  getAllEntries,
  initializeEntries,
  removeOneField,
} = require('./helpers/helpers');

beforeEach(async () => await initializeEntries());

describe('GET methods', () => {
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

  test('Only BTC Entries are returned', async () => {
    const { data } = await getAllEntries('btc');
    expect(data).toContain('BTC');
    expect(data).not.toContain('AVAX');
  });

  test('Cannot find ETH Entries', async () => {
    const { data } = await getAllEntries('ETH');
    expect(data.length).toBe(0);
  });
});

describe('POST methods', () => {
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
});

describe('DELETE methods', () => {
  test('Entry deleted', async () => {
    const res = await api
      .post('/entry')
      .send(ethEntry)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    await api.delete(`/entry/${res.body._id}`).expect(200);
  });

  test('Entry to delete not found', async () => {
    await api.delete('/entry/61ae91c9adb2f72092709f9b').expect(404);
  });

  test('Entry to delete has malformed id', async () => {
    await api.delete('/entry/61ae91c9ad').expect(400);
  });
});

describe('PUT methods', () => {
  test('Update entry', async () => {
    const res = await api
      .post('/entry')
      .send(ethEntry)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    let updatedData = { ...res.body };
    updatedData.currency = 'ADA';

    const updatedRes = await api
      .put(`/entry/${updatedData._id}`)
      .send(updatedData)
      .expect(200);

    expect(updatedRes.body.currency).toBe('ADA');
  });

  test('Update entry giving only fields', async () => {
    const res = await api
      .post('/entry')
      .send(ethEntry)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const updatedRes = await api
      .put(`/entry/${res.body._id}`)
      .send({ currency: 'ADA' })
      .expect(200);

    expect(updatedRes.body.currency).toBe('ADA');
  });

  test('Entry to update not found', async () => {
    await api
      .put('/entry/61ae91c9adb2f72092709f9d')
      .send({ currency: 'ADA' })
      .expect(404);
  });

  test('Entry to update has no content', async () => {
    await api.put('/entry/61ae91c9adb2f72092709f9d').send({}).expect(400);
  });
});

afterAll(() => {
  closeConnections();
});
