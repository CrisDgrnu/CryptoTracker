const entryRepository = require('../repositories/entryRepository');

const findAll = () => {
  return entryRepository
    .findAll()
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const findAllByCurrency = (currency) => {
  return entryRepository
    .findAllByCurrency(currency)
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const create = (data) => {
  return entryRepository
    .create(data)
    .then((savedEntry) => {
      return savedEntry;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const remove = (id) => {
  return entryRepository
    .remove(id)
    .then((removedEntry) => {
      return removedEntry;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const update = (id, data) => {
  return entryRepository
    .update(id, data)
    .then((updatedEntry) => {
      return updatedEntry;
    })
    .catch((error) => {
      throw Error(error);
    });
};

module.exports = {
  findAll,
  findAllByCurrency,
  create,
  remove,
  update,
};
