const api = require('./helpers/createApi');
const closeConnections = require('./helpers/closeConnections');
const { user, initialEntries, ethEntry } = require('./helpers/initialData');

const {
  createUser,
  getAllEntries,
  initializeEntries,
  removeOneField,
  getUserById,
} = require('./helpers/helpers');

beforeEach(async () => {});

describe('GET methods', () => {
  test('Find one user by ID', async () => {
    const user = await createUser();
    await api
      .get(`/user/${user._id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

describe('POST methods', () => {
  test('User created', async () => {
    await api
      .post('/user')
      .send(user)
      .expect(201)
      .expect('Content-Type', /application\/json/);
  });
});

afterAll(() => {
  closeConnections();
});
