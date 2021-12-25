const entryRepository = require('../repositories/entryRepository');
const userRepository = require('../repositories/userRepository');

const findAll = async () => {
  try {
    return await entryRepository.findAll();
  } catch (error) {
    throw error;
  }
};

const findAllByCurrency = async (currency) => {
  try {
    return await entryRepository.findAllByCurrency(currency);
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const createdEntry = await entryRepository.create(data);

    const userId = data.user;
    const user = await userRepository.findOneById(userId);
    user.entries = user.entries.concat(createdEntry._id);
    await userRepository.update(userId, user);

    return createdEntry;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    return await entryRepository.remove(id);
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    return await entryRepository.update(id, data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAll,
  findAllByCurrency,
  create,
  remove,
  update,
};
