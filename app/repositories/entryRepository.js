const model = require('../models/Entry');
const addNameError = require('../utils/addNameError');

const findAll = () => {
  return model
    .find({})
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw error;
    });
};

const findAllByCurrency = (currency) => {
  return model
    .find({ currency: currency })
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw error;
    });
};

const create = (data, next) => {
  return model(data)
    .save()
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw error;
    });
};

const remove = (id) => {
  return model
    .findByIdAndRemove(id)
    .then((removedEntry) => {
      return removedEntry;
    })
    .catch((error) => {
      throw error;
    });
};

const update = (id, data) => {
  return model
    .findByIdAndUpdate(id, data, { new: true })
    .then((updatedEntry) => {
      return updatedEntry;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  findAll,
  findAllByCurrency,
  create,
  remove,
  update,
};
