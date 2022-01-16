const userRepository = require('../repositories/userRepository');
const bcryptUtils = require('../utils/bcryptUtils');

const findOneById = async (id) => {
  try {
    return await userRepository.findOneById(id);
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    const { username, password } = data;

    const user = await userRepository.findOneByUserName(username);

    // If user exists dont create another with the same username
    if (user) {
      return null;
    }

    data.passwordHash = await bcryptUtils.hashPassword(password);
    return await userRepository.create(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findOneById,
  create,
};
