const model = require('../models/User');

// const findAll = () => {
//   return model
//     .find({})
//     .then((entries) => {
//       return entries;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

const findOneById = (id) => {
  return model
    .find({ id: id })
    .then((user) => {
      return user;
    })
    .catch((error) => {
      throw error;
    });
};

const create = (data) => {
  return model(data)
    .save()
    .then((entries) => {
      return entries;
    })
    .catch((error) => {
      throw error;
    });
};

// const remove = (id) => {
//   return model
//     .findByIdAndRemove(id)
//     .then((removedEntry) => {
//       return removedEntry;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// const update = (id, data) => {
//   return model
//     .findByIdAndUpdate(id, data, { new: true })
//     .then((updatedEntry) => {
//       return updatedEntry;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

module.exports = {
  // findAll,
  findOneById,
  create,
  // remove,
  // update,
};
