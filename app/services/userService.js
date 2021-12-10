const userRepository = require('../repositories/userRepository');
const encryptPassword = require('../utils/encryptPassword');

// const findAll = () => {
//   return entryRepository
//     .findAll()
//     .then((entries) => {
//       return entries;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

const findOneById = (id) => {
  return userRepository
    .findOneById(id)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      throw error;
    });
};

const create = async (data) => {
  const { password } = data;
  data.passwordHash = await encryptPassword(password);

  return userRepository
    .create(data)
    .then((savedUser) => {
      return savedUser;
    })
    .catch((error) => {
      throw error;
    });
};

// const remove = (id) => {
//   return entryRepository
//     .remove(id)
//     .then((removedEntry) => {
//       return removedEntry;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// const update = (id, data) => {
//   return entryRepository
//     .update(id, data)
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
