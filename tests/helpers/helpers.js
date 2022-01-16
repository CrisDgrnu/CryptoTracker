const api = require('./createApi');
const Entry = require('../../app/models/Entry');
const User = require('../../app/models/User');

const bcryptUtils = require('../../app/utils/bcryptUtils');
const { user, initialEntries } = require('./initialData');

const createUser = async () => {
  await User.deleteMany({});
  const { password } = user;
  user.passwordHash = await bcryptUtils.hashPassword(password);
  return await User(user).save();
};

const deleteUsers = async () => {
  return await User.deleteMany({});
};

const initializeEntries = async (userId) => {
  await Entry.deleteMany({});

  for (data of initialEntries) {
    data.user = userId;
    await new Entry(data).save();
  }
};

const getAllEntries = async (currency = '') => {
  const route = currency == '' ? '/entry' : `/entry/${currency}`;
  const res = await api.get(route);
  const data = res.body.map((entry) => entry.currency);
  return { res, data };
};

const removeOneField = (entry, field) => {
  const entryClone = { ...entry };
  delete entryClone[field];
  return entryClone;
};

const getUserById = async (id) => {
  const route = `/user/${id}`;
  const res = await api.get(route);
  return res.body;
};

module.exports = {
  createUser,
  deleteUsers,
  initializeEntries,
  getAllEntries,
  removeOneField,
  getUserById,
};
