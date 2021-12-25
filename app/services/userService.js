const userRepository = require('../repositories/userRepository');
const encryptPassword = require('../utils/encryptPassword');

const findOneById = async (id) => {
  try {
    return await userRepository.findOneById(id);
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const { password } = data;
    data.passwordHash = await encryptPassword(password);
    return await userRepository.create(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findOneById,
  create,
};
