const api = require('./createApi');
const Entry = require('../../app/models/Entry');
const { initialEntries } = require('./initialData');

const initializeEntries = async () => {
  await Entry.deleteMany({});

  for (data of initialEntries) {
    await new Entry(data).save();
  }
};

const getAllEntries = async () => {
  const res = await api.get('/entry');
  const data = res.body.map((entry) => entry.currency);
  return { res, data };
};

const removeOneField = (entry, field) => {
  const entryClone = { ...entry };
  delete entryClone[field];
  return entryClone;
};

module.exports = {
  initializeEntries,
  getAllEntries,
  removeOneField,
};
