const model = require('../models/entry');

const findAll = () => {
  return model
    .find({})
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const findAllByCurrency = (currency) => {
  return model
    .find({ currency: currency })
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const create = (data) => {
  return model(data)
    .save()
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const remove = (id) => {
  return model
    .findByIdAndRemove(id)
    .then((removedEntry) => {
      return removedEntry;
    })
    .catch((error) => {
      throw Error(error);
    });
};

const update = (id, data) => {
  return model
    .findByIdAndUpdate(id, data, { new: true })
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
